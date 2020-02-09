// Add your code here
namespace Pathfinding{

    export function seekPath(startingTile: HelperClasses.Point, targetTile: HelperClasses.Point): Array<HelperClasses.PathPosition> {
        let shortestPathTile: HelperClasses.PathPosition = null
        let targetPathPosition: HelperClasses.PathPosition = new HelperClasses.PathPosition(targetTile)
        let finalPathTile: HelperClasses.PathPosition = null
        let isValidTile: boolean = true
        let finalPath: Array<HelperClasses.PathPosition> = []
        let openTiles: Array<HelperClasses.PathPosition> = [new HelperClasses.PathPosition(startingTile)]
        let closedTiles: Array<HelperClasses.PathPosition> = []
        let i: number = 0
        let j: number = 0
        let count: number = 0
        while (openTiles.length > 0) {
            console.log("count " + count)
            count++
            shortestPathTile = findShortestPathTile(openTiles)
            openTiles.removeElement(shortestPathTile)
            closedTiles.push(shortestPathTile)
            let surroundingTiles = getSurroundingPathTiles(shortestPathTile);
            for (i = 0; i < surroundingTiles.length; i++) {
                isValidTile = true
                if (surroundingTiles[i].equalsPathPosition(targetPathPosition)) {
                    surroundingTiles[i].pathParent = shortestPathTile
                    finalPathTile = surroundingTiles[i]
                    console.log("here")
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

                    surroundingTiles[i].pathParent = shortestPathTile
                    openTiles.push(surroundingTiles[i])
                }
                if (finalPathTile != null) {
                    break
                }
            }
            if (finalPathTile != null) {
                break
            }
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
        if (tile.point.y - tileSize > 0) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x, tile.point.y - tileSize)))
        }
        if (tile.point.x + tileSize <= levelWidth * tileSize) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x + tileSize, tile.point.y)))
        }
        if (tile.point.y + tileSize <= levelHeight * tileSize) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x, tile.point.y + tileSize)))
        }
        if (tile.point.x - tileSize > 0) {
            results.push(new HelperClasses.PathPosition(new HelperClasses.Point(tile.point.x - tileSize, tile.point.y)))
        }

        return results
    }
}