'use client'

import { useMachine } from "@xstate/react"
import { todoMachine } from "../machines/todo"


const Todo = () => {
    const [state, send] = useMachine(todoMachine, {
        services: {
            loadTodos: async () => {
                return ['ocu medu', 'ubi zeku']
        }
    }
})

    return (
        <div>
            <p>
            {JSON.stringify(state.value)}
            </p>
            <button onClick={()=>{send({type:'Loaded'})}}>Loaded</button>
            <button onClick={()=>{send({type:'Failed'})}}>Failed</button>
    </div>
  )
}

export default Todo