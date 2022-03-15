import './App.css';

import Home from './Component/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Image from './Component/Image/Image';


function App() {
  return (
    <div className="App">
     
    
     <BrowserRouter>
     
     <Switch>


       <Route exact path='/'>
<Home></Home>
       </Route>

       <Route path="/home">
<Home></Home>
       </Route>


       <Route path="/images">
<Image></Image>
       </Route>

        </Switch>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
