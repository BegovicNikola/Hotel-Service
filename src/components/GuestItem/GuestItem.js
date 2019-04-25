import React, { useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { DELETE_GUEST } from '../../providers/guestActionTypes'

const GuestItem = props => {
  const { guest, onClick } = props
  const GuestInformation = useContext(GuestContext)
  const { dispatch } = GuestInformation

  return (
    <div>
      <h1>{guest.name}</h1>
      <button onClick={() => onClick(guest)}>Edit</button>
      <button
        onClick={() => dispatch({ type: DELETE_GUEST, payload: guest.uuid })}
      >
        Delete
      </button>
    </div>
  )
}

export default GuestItem
