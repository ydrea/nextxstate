'use client'

import { useMachine } from "@xstate/react"
import { todoMachine } from "../machines/todo"
import { fromPromise } from "xstate"


const Todo = () => {
    const [state, send] = useMachine(todoMachine.provide({
        actors: {
            loadTodos: fromPromise (async () => {
                return ['ocu medu', 'ubi zeku']
        })
    }
}))
// const []=useActor()
    return (
        <div>
            <p> {JSON.stringify(state.value)} </p>
            <p> {JSON.stringify(state.context)} </p>
            <div>{ state.matches('Todos Loaded') && <button onClick={()=>send({type: 'Create new'})}>Creating</button> }</div>
    </div>
  )
}

export default Todo