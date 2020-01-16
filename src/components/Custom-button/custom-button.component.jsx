import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, googleAuthButton, ...props}) => {
  return (
    <button className={`${googleAuthButton ? 'google-sign-in' : ''} custom-button`} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
