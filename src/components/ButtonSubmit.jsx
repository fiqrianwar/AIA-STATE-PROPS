import React from 'react'

const ButtonSubmit = ({label,onSubmit}) => {
  return (
    <button type='submit' onClick={onSubmit}>{label}</button>
  )
}

export default ButtonSubmit