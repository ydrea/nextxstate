'use client'

import { useMachine } from '@xstate/react'
import { hoverMachine } from '../machines/hover.js'

//
const Hover = () => {
    const [state, send]= useMachine(hoverMachine)
  return (
      <div>
          <p >{ JSON.stringify(state.value) }</p>
          <button onClick={()=>{send({type: 'MOUSEOVER'})}}>YES</button>/
          <button onClick={()=>{send({type: 'MOUSEOUT'})}}>NO</button>
        </div>
  )
}

export default Hover