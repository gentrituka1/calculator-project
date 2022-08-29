import React, { createContext } from 'react'
import { Props } from '../App'

export const CalcContext = createContext()

export default function CalcProvider({ children }: Props) {
  return (
    <CalcContext.Provider>
        {children}
    </CalcContext.Provider>
  )
}
