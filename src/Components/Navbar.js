import './style.css'
import React from 'react'
import { connect } from 'react-redux'
// GrFormClose
import { GrFormClose } from "react-icons/gr";
import {Link}  from 'react-router-dom'
const Navbar = ({remove , toggle }) => {
  return (
    <nav className={ toggle ? 'navbar hide-navbar' : 'navbar'}>
        <h1 className='logo'><Link to="/">LOL</Link></h1>
        <ul className='links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/Champions">Champions</Link></li>
            <li><Link to="/SummonerSearch">Search Player</Link></li>
        </ul>
        <div className='navbar-buttons'>
            <button onClick={()=>remove()} className="remove-btn"   ><GrFormClose/></button>
        </div>
    </nav>
  )
}
const mapStateToProps = (state) => { 
  return {toggle : state.toggle}
}
const mapDispatchToProps = (dispatch)=> { 
  return { 
    remove : ()=> dispatch({type:'REMOVE'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)