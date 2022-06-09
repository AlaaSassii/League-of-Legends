import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import './style.css'
import PlayerInfo from '../SmallComponents/PlayerInfo';
import Participatns from '../Participants';
import Loading from '../../Loading/Loading';
const Match = ({matchId,API_KEY,regionLink,puuid}) => {
    const [match,setMatch] = useState({}) ; 
    const [loading, setLoading] = useState(true)

useEffect(()=>{
    axios(`${regionLink}/lol/match/v5/matches/${matchId}${API_KEY}`)
    .then(resp => {setMatch(resp.data);console.log(resp.data.info);setLoading(false)}) 
    .catch(err => console.log(err))
},[])
  return (
    <>
   {JSON.stringify(match) != '{}'?
    <div  className={ match.info.participants.find(player=>player.puuid === puuid).win ? 'win-match' : 'lose-match' }>
    <div className="info-tag">
    <h3 >{match.info.gameMode}</h3>
    <h3 className="win">{match.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }</h3>
    </div>
    <PlayerInfo {...match.info} puuid={puuid}/>
    {/* <Participatns regionLink={regionLink}  participants={match.info.participants} />     */}

    </div>
    
    
    
    :
    <div><Loading/></div>
    }
    </>
)}
export default Match


// className={match.info.participants.find(player=>player.puuid === puuid).win ? 'win-match' : 'lose-match'}