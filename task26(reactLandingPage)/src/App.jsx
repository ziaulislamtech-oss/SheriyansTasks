import React from 'react'
import NavBar from './Component/NavBar/NavBar'
import Main from './Component/Main/Main'
import FirstCard from './Component/FirstCards/FirstCard'
import Statistics from './Component/Statistics/Statistics'
import Services from './Component/Services/Services'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Main/>
      <FirstCard/>
      <Statistics/>
      <Services/>
    </div>
  )
}

export default App
