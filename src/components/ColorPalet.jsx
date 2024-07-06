import React from 'react'

function ColorPalet(props) {
  return (
    <div>
  <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:props.backgroundcolor}} onClick={props.change}></div>
    </div>
  )
}

export default ColorPalet
