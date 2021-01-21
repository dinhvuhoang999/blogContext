import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About' 
import SamplePost from './pages/SamplePost';
import Contact from './pages/Contact'
import { BrowserRouter as Switch, Route } from "react-router-dom";
function App() {
  return (
<Switch>
   <Navbar />  
        <Route exact path="/" component = {Home} />
        <Route exact path="/about/"component={About} />
       <Route path="/post/:slug" component={SamplePost} />
       <Route path="/Contact/"  component={Contact} />
          {/* <Route component=  {Error} /> */}
     
    </Switch>

 
  );  
}

export default App;
