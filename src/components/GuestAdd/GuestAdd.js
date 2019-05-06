import React, { useState, useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { CREATE_GUEST } from '../../providers/guestActionTypes'
import { InputNumber } from 'antd'

const GuestAdd = () => {
  const [guestInfo, setGuestInformation] = useState({
    uuid: '123',
    name: '',
    room: null,
    start: 1555941952,
    end: 1555942952
  })
  const GuestInformation = useContext(GuestContext)
  const { dispatch } = GuestInformation

  return (
    <div>
      <h3 className="border-bottom">Check-in</h3>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({ type: CREATE_GUEST, payload: guestInfo })
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
    </div>
  )
}

export default GuestAdd
