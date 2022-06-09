import React,{useState} from 'react'
import './style.css'
import { connect } from 'react-redux'
// GrUnorderedList
import { GrUnorderedList } from "react-icons/gr";

const ToggleButton = ({toggle}) => {
  const [clicked,setClicked] = useState(false)
  return (
    <button className={ 'toggle-btn' }  onClick={()=>{toggle() }}><GrUnorderedList/></button>
  )
}
const mapDispatchToProps = (dispatch) => { 
return {
    toggle : ()=> dispatch({type:"TOGGLE"}) , 
}
}
export default connect(null,mapDispatchToProps)(ToggleButton)