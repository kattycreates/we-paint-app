import React,{useContext} from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import {Context} from '../../contexts/Context'
const Home = () => {
    const {user}=useContext(Context);
    const style={
        "textDecoration":"none",
        "color":"black"
    }
  return (
    <div className='home'>
       <i class="fa fa-palette fa-4x"></i>
        <p className='appName'>WePaint</p>
        {
            user? <Link to='/paint' style={style} className="sign-in">Open app</Link>: <Link to='/login' style={style} className="sign-in">Sign In</Link>
        }
       
    </div>
  )
}

export default Home