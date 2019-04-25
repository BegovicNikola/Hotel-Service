import React, { useContext, useState } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import GuestItem from '../GuestItem/GuestItem'
import GuestModal from '../GuestModal/GuestModal'
import loading from '../../assets/loading.gif'

const GuestList = () => {
  const GuestInfo = useContext(GuestContext)
  const { isLoading, guestList } = GuestInfo.state
  const [activeGuest, setActiveGuest] = useState(null)

  return (
    <>
      {isLoading ? (
        <img src={loading} alt="loading" />
      ) : (
        <>
          {guestList.map(guest => {
            return (
              <GuestItem
                key={guest.uuid}
                guest={guest}
                onClick={setActiveGuest}
              />
            )
          })}
          {activeGuest && (
            <GuestModal
              guest={activeGuest}
              onCancel={() => {
                setActiveGuest(null)
              }}
            />
          )}
        </>
      )}
    </>
  )
}

export default GuestList
