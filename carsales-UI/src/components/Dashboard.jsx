import React from 'react'
import ErTable from './dashboard/ErTable'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import Drawer from './dashboard/Drawer'
import Navbar from './dashboard/Navbar'

export const drawerWidth = 300

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '6em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}))

const Container = styled(Grid)({
    padding: '5em 10em'
})

export default function Dashboard() {
    const rows = [
        {
            no: 1,
            name: 'test1',
            email: 'test@mail.com',
            category: 'Car for sale',
            status: 'In progres',
            creationDate: new Date().toISOString(),
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1
                }
            ]
        },
        {
            no: 2,
            name: 'test2',
            email: 'test@mail.com',
            category: 'Car for sale',
            status: 'In progres',
            creationDate: new Date().toISOString(),
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1
                }
            ]
        },
        {
            no: 3,
            name: 'test3',
            email: 'test@mail.com',
            category: 'Car for sale',
            status: 'In progres',
            creationDate: new Date().toISOString(),
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1
                }
            ]
        },

    ]

    const [showDrawer, setShowDrawer] = React.useState(false)

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

            <Main open={showDrawer}>
                <Container container spacing={2}>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="h2" component="div">
                                {rows.length}
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>Graph coming soon</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <ErTable data={rows} />
                    </Grid>
                </Container>
            </Main>
        </Box>
    )
}
