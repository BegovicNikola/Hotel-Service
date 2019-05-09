import React, { useReducer, useEffect } from 'react'
import {
  IS_LOADING,
  GET_GUESTS,
  DELETE_GUEST,
  CREATE_GUEST,
  UPDATE_GUEST
} from './guestActionTypes'

export const GuestContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case GET_GUESTS: {
      return {
        ...state,
        guestList: action.payload
      }
    }
    case DELETE_GUEST: {
      console.log({ state, action })
      return {
        ...state,
        guestList: state.guestList.filter(
          guest => guest.uuid !== action.payload
        )
      }
    }
    case CREATE_GUEST: {
      console.log({ state, action })
      return {
        ...state,
        guestList: [action.payload, ...state.guestList]
      }
    }
    case UPDATE_GUEST: {
      console.log({ state, action })
      return {
        ...state,
        guestList: state.guestList.map(guest =>
          guest.uuid === action.payload.uuid ? (guest = action.payload) : guest
        )
      }
    }
    default:
      return state
  }
}

const initialState = {
  isLoading: true,
  guestList: null
}

const get_guests = [
  {
    uuid: '1',
    name: 'John Doe',
    room: 7,
    start: '2019-05-01',
    end: '2019-05-03'
  },
  {
    uuid: '2',
    name: 'Jane Joe',
    room: 3,
    start: '2019-05-02',
    end: '2019-05-04'
  },
  {
    uuid: '3',
    name: 'Tim Pool',
    room: 6,
    start: '2019-05-01',
    end: '2019-05-06'
  },
  {
    uuid: '4',
    name: 'Jim Cast',
    room: 12,
    start: '2019-05-04',
    end: '2019-05-08'
  }
]

export const GuestProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: IS_LOADING, payload: false })
    dispatch({ type: GET_GUESTS, payload: get_guests })
  }, [])

  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GuestContext.Provider>
  )
}
