import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, googleAuthButton, invert_btn, ...props}) => {
  return (
    <button className={`${googleAuthButton ? 'google-sign-in' : ''} ${invert_btn ? 'invert-button' : ''} custom-button`} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
