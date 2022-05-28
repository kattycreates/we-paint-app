import React,{useContext} from 'react'
import './topbar.css'
import { Context } from '../../contexts/Context'
const Topbar = () => {
  const {dispatch}=useContext(Context);
  const logout=async(e)=>{
    e.preventDefault();
    await dispatch({type:"Logout"});
    window.location.replace('/login');
   };
  return (
    <div className='topbar'>
      <p>We<span>Paint</span></p>
      <i className="fas fa-sign-out-alt fa-2x" onClick={logout} title="logout"></i>
    </div>
  )
}

export default Topbar