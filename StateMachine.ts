// Add your code here
namespace StateMachine{
    export interface IStateMachine{
        onStateChange(): (currentState:string) => void
        onBeforeStateChange(): (newState:string, oldState:string) => void
        changeState(newState:string): void
    }
    export class StateMachine {

    }
}