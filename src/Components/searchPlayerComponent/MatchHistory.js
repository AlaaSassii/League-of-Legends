import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Match from './Match';
import { FiChevronDown ,FiChevronUp} from "react-icons/fi";
import Loading from '../../Loading/Loading';
const MatchHistory = ({region,id,puuid,API_KEY}) => {

  const [regionLink,setRegionLink] = useState('') ; 
  const [matches , setMatches] = useState([]) ; 
  const [number ,setNumber] = useState(4)
  const [loading, setLoading] = useState(true)
  const [notFound,setNotFound] = useState(false)
  useEffect(()=>{
    if(region == 'KR' || region == 'JP1' ){setRegionLink('https://asia.api.riotgames.com')}  ; 
    if(region == 'NA1'|| region == 'BR1'){setRegionLink('https://americas.api.riotgames.com')}  ; 
    if(region =="EUW1" || region == 'EUN1' ){setRegionLink('https://europe.api.riotgames.com')} ; 
    
   
  },[region])
  useEffect(()=>{
    
    setLoading(true)
    if (regionLink.length > 0) {
      console.log(regionLink,'regionLink')
      axios(`${regionLink}/lol/match/v5/matches/by-puuid/${puuid}/ids${API_KEY}`)
      .then(resp => {setMatches(resp.data.slice(0,number));setLoading(false)})
      .catch(err =>{ console.log(err);setNotFound(true)}) ; 
    }
  },[regionLink,number])
  return (
    
    <div>
      {!notFound ?
      <>
        { matches.length > 0 ?
        <div className='matchHistory'>{
          matches.map((match)=>{
            return <Match regionLink={regionLink} puuid={puuid} API_KEY={API_KEY} matchId={match} key={match}/>
          })}
       { matches.length <20 &&  <button  style={{width:'100%'}} onClick={()=>setNumber(number + 4 )}><FiChevronDown/></button>}
    </div>
        
          : <div>{!notFound ?<Loading/> : <h3>Data Not Found</h3> }</div>
        } </>:
        <h3>Data Not Found</h3>
        }
    </div>
  )
}

export default MatchHistory
    // switch(region){ 
    //   case'KR':case'JP1':setRegionLink('https://asia.api.riotgames.com') ;
    //   case'NA1':case'BR1':setRegionLink('https://americas.api.riotgames.com') ;
    //   case'EUW1':  setRegionLink('https://europe.api.riotgames.com');
    //   default :  setRegionLink('');