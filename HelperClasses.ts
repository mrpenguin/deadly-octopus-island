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
    }

    export class Waypoint {
        point:Point
        connections:Array<Waypoint> = []

        constructor(point: Point){
            this.point = point
        }

        getDistanceFrom(otherPoint: Point): number {
            return Math.abs(otherPoint.x - this.point.x) + Math.abs(otherPoint.y - this.point.y)
        }

        getRandomConnection(waypointsToAvoid:Array<Waypoint>):Waypoint{
            let result:Waypoint = null
            console.log("connections " + this.connections.length)
            let connectionClone = this.connections.slice()
            let resultIndex = -1
            while (result === null && connectionClone.length > 0) {
                resultIndex = Math.floor(Math.randomRange(0, connectionClone.length))
                result = this.connections[resultIndex]
                connectionClone.splice(resultIndex, 1)
                if(!waypointsToAvoid.find(r => r === result)){
                    return result
                } else{
                    result = null
                }
            }
            return result
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
            return Math.abs(otherPosition.point.x - this.point.x) + Math.abs(otherPosition.point.y - this.point.y)
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