import React, { useState, useContext } from 'react'
import { GuestContext } from '../../providers/GuestProvider'
import { CREATE_GUEST } from '../../providers/guestActionTypes'
import { Input, InputNumber, DatePicker } from 'antd'

const { RangePicker } = DatePicker

const GuestAdd = () => {
  const [guestInfo, setGuestInformation] = useState({
    uuid: '123',
    name: '',
    room: null,
    start: '',
    end: ''
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
            <Input
              className="w-100"
              placeholder="Check-in Name"
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
              className="w-100"
              placeholder="Room Number"
              defaultValue={guestInfo.room}
              onChange={e => setGuestInformation({ ...guestInfo, room: e })}
            />
          </div>
          <div className="col-12 mt-2">
            <RangePicker
              format="YYYY-MM-DD"
              placeholder={['Check-in Date', 'Check-out Date']}
              className="w-100"
              onChange={(value, dateString) =>
                setGuestInformation({
                  ...guestInfo,
                  start: dateString[0],
                  end: dateString[1]
                })
              }
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
