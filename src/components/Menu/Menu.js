import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import styled from 'styled-components'

import {
  AddPhotoAlternateOutlined,
  ReceiptOutlined,
  CameraAltOutlined
} from '@material-ui/icons'

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: 0;
`
export default function Menu() {
  return (
    <StyledBottomNavigation onChange={() => {}}>
      <BottomNavigationAction
        label='photos'
        icon={<AddPhotoAlternateOutlined />}
      />
      <BottomNavigationAction label='camera' icon={<CameraAltOutlined />} />
      <BottomNavigationAction label='recents' icon={<ReceiptOutlined />} />
    </StyledBottomNavigation>
  )
}
