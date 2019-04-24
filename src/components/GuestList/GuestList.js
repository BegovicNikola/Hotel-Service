import React, { useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import GuestItem from '../GuestItem/GuestItem'
import loading from '../../assets/loading.gif'

const GuestList = () => {
  const GuestInfo = useContext(GuestContext)
  const { isLoading, guestList } = GuestInfo
  console.log(GuestInfo)
  return (
    <>
      {isLoading ? (
        <img src={loading} alt="loading" />
      ) : (
        <>
          {guestList.map(guest => {
            return (
              <GuestItem key={guest.uuid} guest={guest}>
                {guest.name}
              </GuestItem>
            )
          })}
        </>
      )}
    </>
  )
}

export default GuestList
