import React from 'react'
import { BottomNavigation } from '@material-ui/core'

export default function Menu() {
  return <BottomNavigation onChange={() => changeNavigation()} />
}
