import React from 'react'

import './form-input.style.scss'

const isShrinkable  = (props) => (props.value.length ? 'shrink' : '') 
const setLabel      = (label, props) => (<label className={`${isShrinkable(props)}form-input-label`} > {label} </label>)

const FormInput = ({label, handleChange, ...otheProps})=> {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otheProps}/>
      {label ? setLabel(label, otheProps) : null}
    </div>
  )
}

export default FormInput
