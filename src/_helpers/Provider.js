import React, { createContext, useReducer } from 'react'
import { followerReducer } from '../_reducers'
import { followerInitialState } from '../_initialstates'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [followerState, followerDispatch] = useReducer(
    followerReducer,
    followerInitialState
  )

  return (
    <GlobalContext.Provider value={{ followerState, followerDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
