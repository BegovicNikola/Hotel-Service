import React, { useState } from 'react'

const GuestItem = props => {
  const { guest } = props
  const [guestUpdate, setGuestUpdate] = useState(guest.name)
  return (
    <div>
      <input
        value={guestUpdate}
        onChange={e => setGuestUpdate(e.target.value)}
      />
    </div>
  )
}

export default GuestItem
