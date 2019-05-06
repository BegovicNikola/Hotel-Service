import React, { useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { DELETE_GUEST } from '../../providers/guestActionTypes'

const GuestItem = props => {
  const { guest, onClick } = props
  const GuestInformation = useContext(GuestContext)
  const { dispatch } = GuestInformation

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <h3>
        {guest.name} ({guest.room})
      </h3>
      <div>
        <button className="btn btn-primary ml-2" onClick={() => onClick(guest)}>
          Edit
        </button>
        <button
          className="btn btn-danger ml-2"
          onClick={() => dispatch({ type: DELETE_GUEST, payload: guest.uuid })}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default GuestItem
