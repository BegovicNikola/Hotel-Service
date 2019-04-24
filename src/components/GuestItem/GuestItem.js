import React, { useState, useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { UPDATE_GUEST } from '../../providers/guestActionTypes'

const GuestItem = props => {
  const { guest } = props
  const [guestInformation, setGuestInformation] = useState(guest)
  const GuestInfo = useContext(GuestContext)
  const { dispatch } = GuestInfo
  // console.log(guestInformation)
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          console.log(guestInformation)
          dispatch({ type: UPDATE_GUEST, payload: guestInformation })
        }}
      >
        <input
          value={guestInformation.name}
          onChange={e =>
            setGuestInformation({ ...guestInformation, name: e.target.value })
          }
        />
        <button className="btn btn-success" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default GuestItem
