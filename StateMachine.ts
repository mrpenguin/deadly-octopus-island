// Add your code here
namespace StateMachine{

    export class StateMachine {
        private currentState:string = ""
        private onStateChangeList: { (currentState: string) : void}[] = []
        private onBeforeStateChangeList: { (newState: string, oldState: string) : void}[] = []

        constructor (){
            
        }

        public addStateChange(stateChangeFunction: (currentState:string) => void){
            this.onStateChangeList.push(stateChangeFunction)
        }

        public addBeforeStateChange(stateBeforeChangeFunction: (newState: string, oldState: string) => void) {
            this.onBeforeStateChangeList.push(stateBeforeChangeFunction)
        }

        public changeState(newState:string) {
            if (this.currentState != newState) {
                if (this.currentState != "") {
                    let self = this;
                    this.onBeforeStateChangeList.forEach(function(item, index){
                        item(newState, self.currentState)
                    })
                }
                this.onStateChangeList.forEach(function(item, index){
                    item(newState)
                })
                this.currentState = newState
            }
        }

        public getState():string{
            return this.currentState
        }

        public removeStateChange(stateChangeFunction: (currentState: string) => void) {
            let i = this.onStateChangeList.length;
            while (i > -1) {
                if (this.onStateChangeList[i] === stateChangeFunction) {
                    this.onStateChangeList.splice(i, 1);
                }
                i--;
            }
        }

        public removeBeforeStateChange(stateBeforeChangeFunction: (newState: string, oldState: string) => void) {
            let i = this.onBeforeStateChangeList.length;
            while (i > -1) {
                if (this.onBeforeStateChangeList[i] === stateBeforeChangeFunction) {
                    this.onBeforeStateChangeList.splice(i, 1);
                }
                i--;
            }
        }
    }
}