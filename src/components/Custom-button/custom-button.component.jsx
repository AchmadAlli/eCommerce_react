import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, googleAuthButton, inverted, ...props}) => {
  return (
    <button className={`${googleAuthButton ? 'google-sign-in' : ''} ${inverted ? 'invert-button' : ''} custom-button`} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
