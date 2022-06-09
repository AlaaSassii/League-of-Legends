import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
const Player = ({ApiKey,puuid,regionLink}) => {
  const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(() => {
        axios(`${regionLink}/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${ApiKey}`)
        .then(resp => console.log('resp',resp))
        .catch(err => console.log('err',err))
      }, "10000")
    },[])
  return (
    <div>Player</div>
  )
}
const mapStateToProps = (state) => {
  console.log('state',state)
    return {ApiKey :state.API_KEY}
}
export default connect(mapStateToProps)(Player)