import React, { useState, useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { UPDATE_GUEST } from '../../providers/guestActionTypes'
import { Modal } from 'antd'
import 'antd/dist/antd.css'

const GuestModal = props => {
  const { guest, onCancel } = props
  const [guestInfo, setGuestInformation] = useState(guest)
  const GuestInformation = useContext(GuestContext)
  const { dispatch } = GuestInformation

  return (
    <>
      <Modal
        title={'Edit User'}
        visible
        onCancel={onCancel}
        // maskClosable={false}
        width={'95%'}
        footer={null}
      >
        <form
          onSubmit={event => {
            event.preventDefault()
            console.log(guestInfo)
            dispatch({ type: UPDATE_GUEST, payload: guestInfo })
          }}
        >
          <input
            value={guestInfo.name}
            onChange={e =>
              setGuestInformation({ ...guestInfo, name: e.target.value })
            }
          />
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </Modal>
    </>
  )
}

export default GuestModal
