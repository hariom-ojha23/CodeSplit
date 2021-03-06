import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import io from 'socket.io-client'

import NavBar from './components/NavBar/'
import HomeScreen from './screens/HomeScreen/'
import LoginScreen from './screens/LoginScreen/'
import RegisterScreen from './screens/RegisterScreen/'
import ContactScreen from './screens/ContactScreen'
import EditorScreen from './screens/EditorScreen/'

const socket = io.connect('http://localhost:5000')

const App = () => {
  const setTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })
  return (
    <ThemeProvider theme={setTheme}>
      <Router>
        <NavBar />
        <main style={{ height: '100%' }}>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route exact path='/' component={HomeScreen} />
          <Route path='/contact' component={ContactScreen} />
          {/* <Route path='/about' component={AboutScreen} /> */}
          <Route path='/editor/:room'>
            <EditorScreen socket={socket} />
          </Route>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
