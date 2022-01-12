import React from 'react'
import { useHistory } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LogoutIcon from '@mui/icons-material/Logout';

import { drawerWidth } from '../Dashboard'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}))

export default function Drawer({ showDrawer, setShowDrawer }) {
    const theme = useTheme()
    const history = useHistory()

    return (
        <MuiDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                }
            }}
            variant="persistent"
            anchor="left"
            open={showDrawer}
        >
            <DrawerHeader>
                <IconButton onClick={() => setShowDrawer(false)}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem button onClick={() => {
                    setShowDrawer(false)
                    history.push('/dashboard')
                }} key="cereri">
                    <ListItemIcon>
                        <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cars for sale" />
                </ListItem>
                <ListItem button key="postari" onClick={() => {
                    history.push('/posts')
                    setShowDrawer(false)
                }}>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts" />
                </ListItem>
            </List>
            <Divider />
            <List>

                <ListItem button onClick={() => {
                    alert('Deconectat')
                    setShowDrawer(false)
                    history.push('/')
                }}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deconectare" />
                </ListItem>
            </List>
        </MuiDrawer>
    )
}
