import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import phoneService from './services/phones'
import Admin from './pages/Admin';
import Catalog from './pages/Catalog'
import Phone from './pages/Phone';


const App = () => {

  const [dbPhones, setdbPhones] = useState(null)

  useEffect(() => {

    phoneService.getAll()
      .then(response => {
        if (!response.error) {      
          setdbPhones(response.data)           
        } 
      }
      )
  }, [])

  return (
    <>

      <Router >

        <Switch>
          <Route exact path="/">
            <Catalog dbPhones={dbPhones} />
          </Route>

          <Route path="/phone/:id">
            <Phone />
          </Route>

          <Route path="/admin">
            <Admin dbPhones={dbPhones} setdbPhones={setdbPhones} />
          </Route>



        </Switch>
      </Router>


    </>
  )
}

export default App
