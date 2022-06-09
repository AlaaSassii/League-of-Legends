import React ,{useState}from 'react'
import { connect } from 'react-redux'
import {Platform} from '../Variabels/serverList'
import axios from 'axios'
import Select from 'react-select'
import { Button, TextField } from '@material-ui/core'
import Profile from '../Components/searchPlayerComponent/Profile'
import ChampionsPlayer from '../Components/searchPlayerComponent/ChampionsPlayer'
import MatchHistory from '../Components/searchPlayerComponent/MatchHistory'
import Loading from '../Loading/Loading'
const SearchPlayer = ({KEY}) => {
    const [SearchPlayer,setSearchPlayer] =useState('')
    const [data , setData] = useState({})
    const [server,setServer] = useState('')
    const [placeRegion,setPlaceRegion] = useState('')
    const [loading, setLoading] = useState(true) 
    const [error,setError] = useState(false)

    const API_KEY = KEY ; 
    function searchOnPlayer(event){
        // Set up The Correct API call
        if (server.length >0)

        { 
          setData({});
          let APICallString = `https://${server}/lol/summoner/v4/summoners/by-name/${SearchPlayer}?api_key=${API_KEY}`;  
          axios(APICallString)
        
          .then(resp => {setData(resp.data) ;console.log(resp.data) ;   setLoading(false) ;  }) 
          .catch(err =>{ console.log(err);setError(true)});
          }
       else
       alert('no server')
    }
    const handleClick = (e)=> {
      searchOnPlayer(e);
      setError(true)
    }

    // console.log("placeRegion",placeRegion)
    // console.log('1111',place(placeRegion))
    const styles = {
      container: base => ({
        ...base,
        flex: 1 , 
        width: "100px" ,
        display:"inline-block" ,
        
      })
    };
  return (
    <div className="search">
      <p style={{color:'red'}}>if you don't have summoner name in your mind type skip the use and select EW1</p>
        <h1>Search player</h1>
        <TextField value={SearchPlayer} onChange={e => {setSearchPlayer(e.target.value);}}/>
        <Button onClick={e =>{SearchPlayer && handleClick(e) }} disabled={SearchPlayer.length >0  ? false : true} size='small' color='primary' variant='contained'>Search</Button>
        
        <Select styles={styles}  onChange={e =>{ setServer(e.value); setPlaceRegion(e.label)}} options={Platform}/> 
        {
          JSON.stringify(data) != '{}'? <>
       
          <div className="flex" style={{display:'flex',}}>
          <ChampionsPlayer  id={data.id}  region={server}/>
            <div >
          <Profile name={data.name} summonerLevel={data.summonerLevel}  image={data.profileIconId}  region={server}  key={API_KEY} id={data.id} />
          <MatchHistory id={data.id} region={placeRegion}  puuid={data.puuid} API_KEY={`?api_key=${API_KEY}`} />
          </div>
          </div>
          </> :
          <>
          <h1>There is no data</h1>
          {error && <p style={{color:"red"}}>If There is still no Data You may didn't Select The Rigion or The Key Of The Api is invalid 
          {'(Connect To the Owner To Change The Key)'}
          </p>}
          </>
        }
    </div>
  )
}
const mapStateToProps = (state) => { 
 return {KEY : state.API_KEY}
}
export default connect(mapStateToProps)(SearchPlayer)