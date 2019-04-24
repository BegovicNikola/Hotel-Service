import React from 'react'

const GuestItem = props => {
  const { guest } = props
  return <h1>{guest.name}</h1>
}

export default GuestItem
