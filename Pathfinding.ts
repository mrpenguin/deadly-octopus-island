// Add your code here
namespace Pathfinding{

    export function seekPath(startingTile: HelperClasses.Point, targetTile: HelperClasses.Point, maxIterations:number): Array<HelperClasses.PathPosition> {
        let shortestPathTile: HelperClasses.PathPosition = null
        let targetPathPosition: HelperClasses.PathPosition = new HelperClasses.PathPosition(targetTile)
        let finalPathTile: HelperClasses.PathPosition = null
        let isValidTile: boolean = true
        let finalPath: Array<HelperClasses.PathPosition> = []
        let openTiles: Array<HelperClasses.PathPosition> = [new HelperClasses.PathPosition(startingTile)]
        let closedTiles: Array<HelperClasses.PathPosition> = []
        let i: number = 0
        let j: number = 0
        while (openTiles.length > 0 && maxIterations > -1) {
            shortestPathTile = findShortestPathTile(openTiles)
            openTiles.removeElement(shortestPathTile)
            closedTiles.push(shortestPathTile)
            let surroundingTiles = getSurroundingPathTiles(shortestPathTile);
            for (i = 0; i < surroundingTiles.length; i++) {
                isValidTile = true
                if (surroundingTiles[i].equalsPathPosition(targetPathPosition)) {
                    surroundingTiles[i].setPathParent(shortestPathTile, targetTile)
                    finalPathTile = surroundingTiles[i]
                    break
                } else {
                    //search open tiles
                    for (j = 0; j < openTiles.length; j++) {
                        if (surroundingTiles[i].equalsPathPosition(openTiles[j])) {
                            if (openTiles[j].findTotalDistance() > surroundingTiles[i].findTotalDistance()) {
                                openTiles[j] = surroundingTiles[i] //replace current open tile with this one
                            }
                            isValidTile = false
                            break
                        }
                    }
                    if (!isValidTile) {
                        continue
                    }
                    //search closed tiles
                    for (j = 0; j < closedTiles.length; j++) {
                        if (surroundingTiles[i].equalsPathPosition(closedTiles[j])) {
                            isValidTile = false
                            break
                        }
                    }
                    if (!isValidTile) {
                        continue
                    }

                    //search map tile
                    surroundingTiles[i].point.tile = tiles.getTileAt(surroundingTiles[i].point.x, surroundingTiles[i].point.y)
                    if (isLandTile(surroundingTiles[i].point.tile)) {
                        closedTiles.push(surroundingTiles[i])
                        continue
                    }

                    surroundingTiles[i].setPathParent(shortestPathTile, targetTile)
                    openTiles.push(surroundingTiles[i])
                }
                if (finalPathTile != null) {
                    break
                }
            }
            if (finalPathTile != null) {
                break
            }
            maxIterations--
        }
        if (finalPathTile != null) {
            //build final array
            let currentPathTile: HelperClasses.PathPosition = finalPathTile
            while (currentPathTile != null) {
                finalPath.insertAt(0, currentPathTile)
                currentPathTile = currentPathTile.pathParent
            }
        }
        return finalPath
    }

    function findShortestPathTile(openTiles: Array<HelperClasses.PathPosition>): HelperClasses.PathPosition {
        let shortestPath: HelperClasses.PathPosition = null
        openTiles.forEach(function (value: HelperClasses.PathPosition, index: number) {
            if (shortestPath != null) {
                if (value.findTotalDistance() < shortestPath.findTotalDistance()) {
                    shortestPath = value
                }
            } else {
                shortestPath = value
            }
        })
        return shortestPath
    }
    
    function getSurroundingPathTiles(tile: HelperClasses.PathPosition): Array<HelperClasses.PathPosition> {
        let results = []
        let levelWidth = 32 //todo: actually calculate the size
        let levelHeight = 32 //todo: actually calculate the size
        if (tile.point.y - TILE_SIZE > 0) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x, tile.point.y - TILE_SIZE)))
        }
        if (tile.point.x + TILE_SIZE <= levelWidth * TILE_SIZE) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x + TILE_SIZE, tile.point.y)))
        }
        if (tile.point.y + TILE_SIZE <= levelHeight * TILE_SIZE) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x, tile.point.y + TILE_SIZE)))
        }
        if (tile.point.x - TILE_SIZE > 0) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x - TILE_SIZE, tile.point.y)))
        }

        return results
    }
    export function getTilesBetweenPoints(point1: HelperClasses.Point, point2: HelperClasses.Point, tilesize: number): Array<Image> {
        const returnTiles: Array<Image> = []
        let currentX = 0
        let currentY = 0
        let target = 0
        if (point1.x == point2.x) {
            currentY = Math.min(point1.y, point2.y) + tilesize
            target = Math.max(point1.y, point2.y)
            currentX = point1.x
            while (currentY < target) {
                returnTiles.push(tiles.getTileAt(currentX, currentY))
                currentY += tilesize
            }
        }
        if (point1.y == point2.y) {
            currentY = point1.y;
            currentX = Math.min(point1.x, point2.x) + tilesize
            target = Math.max(point1.x, point2.x)
            while (currentX < target) {
                returnTiles.push(tiles.getTileAt(currentX, currentY))
                currentX += tilesize
            }
        }
        return returnTiles
    }
    export function connectWaypoints(waypoints: Array<HelperClasses.Waypoint>): Array<HelperClasses.Waypoint> {
        let i = waypoints.length - 1
        let j = 0
        while (i > -1) {
            let validConnection = false
            j = i - 1
            while (j > -1) {
                validConnection = false
                if (waypoints[i].point.x == waypoints[j].point.x ||
                    waypoints[i].point.y == waypoints[j].point.y) {
                    validConnection = true
                    //need to double check that there is no land in between
                    let connectingTiles = getTilesBetweenPoints(waypoints[i].point, waypoints[j].point, TILE_SIZE)
                    connectingTiles.forEach(function (value: Image, index: number) {
                        if (validConnection) {
                            if (isLandTile(value)) {
                                validConnection = false
                            }
                        }
                    })
                }
                if (validConnection) {
                    waypoints[i].connections.push(waypoints[j])
                    waypoints[j].connections.push(waypoints[i])
                }
                j--
            }
            i--
        }
        return waypoints
    }

    export function getClosestWaypoint(point:HelperClasses.Point, waypoints:Array<HelperClasses.Waypoint>):HelperClasses.Waypoint{
        let currentScore = 100000
        let closestWaypoint:HelperClasses.Waypoint = null
        waypoints.forEach(function (value: HelperClasses.Waypoint, index: number) {
            if(value.getDistanceFrom(point) < currentScore){
                currentScore = value.getDistanceFrom(point)
                closestWaypoint = value
            }
        })
        return closestWaypoint
    }
}