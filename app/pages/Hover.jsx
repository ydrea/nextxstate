'use client'

import { useMachine } from '@xstate/react'
import React from 'react'
import { hoverMachine } from '../machines/hover.js'

//
const Hover = () => {
    const [state, send]= useMachine(hoverMachine)
  return (
      <div>
          <p >{ JSON.stringify(state.value) }</p>
          <button onClick={()=>{send({type: 'MOUSEOVER'})}}>hoverYES</button><hr/>
          <button onClick={()=>{send({type: 'MOUSEOUT'})}}>hoverNO</button>
        </div>
  )
}

export default Hover