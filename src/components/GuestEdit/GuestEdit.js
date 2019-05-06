import React, { useState, useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { UPDATE_GUEST } from '../../providers/guestActionTypes'
import { InputNumber, Modal } from 'antd'
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
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                value={guestInfo.name}
                onChange={e =>
                  setGuestInformation({ ...guestInfo, name: e.target.value })
                }
              />
            </div>
            <div className="col-4">
              <InputNumber
                min={1}
                max={60}
                className="form-control"
                defaultValue={guestInfo.room}
                onChange={e => setGuestInformation({ ...guestInfo, room: e })}
              />
            </div>
            <div className="col-4 mx-auto mt-2">
              <button className="btn btn-success form-control" type="submit">
                <span className="fas fa-check-circle" />
                <span className="ml-1">Update</span>
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default GuestModal
