import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
  
  } 
  from "react-router-dom";
import ComponentCard from './ComponentCard';
import Product from './Product'
import Home from './Home';
import NoMatch from './NoMatch';
import About from './About';

function App() {
  return (
    <div >
  <Router>
                <Switch>
                    <Route path="/ComponentCard">
                        <ComponentCard/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/about/:userId">
                        <About/>
                    </Route>
                    <Route exact path="/">
                      <Home/>
                      </Route>
                      <Route path="*">
                        <NoMatch/>

                      </Route>

                   
                
                </Switch>
            </Router>
        
    
    </div>
  );
}

export default App;
