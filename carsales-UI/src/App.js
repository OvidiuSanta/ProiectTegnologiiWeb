import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Posts from './components/dashboard/Posts'
import Navbar from './components/dashboard/Navbar'
import Drawer from './components/dashboard/Drawer'
import { createGlobalStyle } from 'styled-components'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    const [showDrawer, setShowDrawer] = React.useState(false)

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Login} />
                <>
                    <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
                    <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/posts" component={Posts} />
                </>
            </Switch>
        </Router>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: rgba(100,150,150,0.2);
    }
`

export default App
