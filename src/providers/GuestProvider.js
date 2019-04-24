import React, { useState, useEffect } from 'react'

export const GuestContext = React.createContext()

export const GuestProvider = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [guestList, setGuestList] = useState(null)

  useEffect(() => {
    setIsLoading(false)
    setGuestList([
      { uuid: '1', name: 'John Doe', start: 1555941952, end: 1555942952 },
      { uuid: '2', name: 'Jane Joe', start: 1555942952, end: 1555943952 },
      { uuid: '3', name: 'Tim Pool', start: 1555943952, end: 1555944952 },
      { uuid: '4', name: 'Jim Cast', start: 1555944952, end: 1555945952 }
    ])
  }, [])

  return (
    <GuestContext.Provider value={{ isLoading, guestList }}>
      {props.children}
    </GuestContext.Provider>
  )
}

// export const GuestConsumer = GuestContext.Consumer

// export function withGuestProvider(Component) {
//   return function WrapperGuestProvider(props) {
//     return (
//       <GuestConsumer>
//         {value => <Component {...props} {...value} />}
//       </GuestConsumer>
//     )
//   }
// }
