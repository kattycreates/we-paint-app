import {Routes,Route} from 'react-router-dom';
import {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Context } from './contexts/Context';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Paint from './pages/paint/Paint';
import Home from './pages/home/Home'
function App() {
  const {user}=useContext(Context);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
       

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/paint' element={user?<Paint />:<Login />} />
          <Route exact path='/login' element={user?<Paint />:<Login />} />
          <Route exact path='/register' element={user?<Paint />:<Register />} />
       
          
        </Routes>
      
        
      </BrowserRouter>
     

    </div>
  );
}

export default App;
