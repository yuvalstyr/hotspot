import * as React from 'react'
const UserStateContext = React.createContext(undefined)
const UserDispatchContext = React.createContext(undefined)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function UserProvider({ children }) {
  const [user, setUser] = React.useState()
  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

function useUserState(): React.Context<any> {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }
  return context
}
function useUserDispatch(): React.Dispatch<
  (prevState: undefined) => undefined
> {
  const context = React.useContext(UserDispatchContext)
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider')
  }
  return context
}
export { UserProvider, useUserState, useUserDispatch }
