import React, { useState } from 'react'

const GuestItem = props => {
  const { guest } = props
  const [guestName, setGuestName] = useState(guest.name)
  return (
    <div>
      <input value={guestName} onChange={e => setGuestName(e.target.value)} />
    </div>
  )
}

export default GuestItem
