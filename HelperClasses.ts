// Add your code here
namespace HelperClasses{

    export class Point {
        x: number
        y: number
        remainder: number
        tile: Image = null
        constructor(x: number = 0, y: number = 0) {
            this.x = x
            this.y = y
        }
        getColumn(): number {
            return Math.floor(this.x / TILE_SIZE);
        }
        getRow(): number {
            return Math.floor(this.y / TILE_SIZE);
        }
        equals(otherPoint: Point): boolean {
            return this.x === otherPoint.x && this.y === otherPoint.y
        }
        calculateDistance(otherPoint: Point): number {
            //using Manhattan calculation since shark can only move four directions
            return Math.abs(otherPoint.x - this.x) + Math.abs(otherPoint.y - this.y)
        }
    }

    export class Waypoint {
        point:Point
        connections:Array<Waypoint> = []

        constructor(point: Point){
            this.point = point
        }

        getDistanceFrom(otherPoint: Point): number {
            return this.point.calculateDistance(otherPoint)
        }

        getRandomConnection(waypointsToAvoid:Array<Waypoint>):Waypoint{
            let result:Waypoint = null
            let connectionClone:Array<HelperClasses.Waypoint> = this.connections.slice()
            let resultIndex = -1
            while (result === null && connectionClone.length > 0) {
                resultIndex = Math.floor(Math.randomRange(0, connectionClone.length - 1))
                result = connectionClone[resultIndex]
                connectionClone.splice(resultIndex, 1)
                if(!waypointsToAvoid.find(r => r.point.equals(result.point))){
                    return result
                } else{
                    result = null
                }
            }
            return this.connections[0] //failsafe in case everything goes wrong
        }
    }
    
    export class PathPosition {
        point: Point
        distanceFromTarget: number
        distanceFromParent: number
        pathParent: PathPosition
        constructor(point: Point) {
            this.point = point
        }
        calculateDistance(otherPosition: PathPosition): number {
            //using Manhattan calculation since shark can only move four directions
            return this.point.calculateDistance(otherPosition.point)
        }
        equalsPathPosition(otherPathPosition: PathPosition): boolean {
            return this.point.getColumn() === otherPathPosition.point.getColumn() && this.point.getRow() === otherPathPosition.point.getRow()
        }
        equalsPoint(otherPoint: Point): boolean {
            return this.point.getColumn() === otherPoint.getColumn() && this.point.getRow() === otherPoint.getRow()
        }
        findTotalDistance(): number {
            return this.distanceFromTarget + this.distanceFromParent
        }
    }
}