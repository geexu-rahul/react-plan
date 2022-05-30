import React from 'react'

export default function SwitchMode(props) {
  return (
    <div className="form-check form-switch m-2" >
    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className={`form-check-label ${(props.mode =="dark") ? "text-white" : ''} `} htmlFor="flexSwitchCheckDefault"> 
     { (props.mode =="dark") ? "Enable light" : "Enable Dark" }
     </label>
  </div>
  )
}
