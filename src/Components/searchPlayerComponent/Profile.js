import React ,{useEffect,useState} from 'react'
import './style.css'
import axios from 'axios'
import { connect } from 'react-redux'
const Profile = ({ API_KEY,name ,summonerLevel, image,id ,region }) => {
    const [ranks,setRanks] = useState([]) ; 
    useEffect(()=>{
    console.log("key",API_KEY) ; 

    axios(`https://${region}/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
    .then(resp => {setRanks(resp.data); console.log(Object.values(ranks[1])) })
    .catch(err => console.log(err))
    },[id])
  return (
    <div className="searchplayer-profile">
        <img src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${image}.png`}/>
        <div>
        <h3>name</h3>
        <p>{name}</p>
        </div>
        <div >
        <h3>level :</h3>
        <p>{summonerLevel}</p>
        </div>
        {   
        
            ranks.length >0 ? 
            <>
            {
                Object.values(ranks[0]).length > 0 ? 
                <div>
                     <h3>Rank solo/duo</h3>
            <img className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${ranks[0].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
            <p>{`${ranks[0].tier} ${ranks[0].rank}`}</p>
                </div> 
                :
                <div>
                <h3>Rank flex</h3>
                <p>Unranked</p>
             </div>
            }
            {
                ranks.length >1 ? 
                <div>
                <h3>Rank flex</h3>
                <img  className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${ranks[1].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
                <p>{`${ranks[1].tier} ${ranks[1].rank}`}</p>
                </div>
                :
            <div>
                <h3>Rank flex</h3>
                <p>Unranked</p>
             </div>
            }

            </> 
            :
            <>
            <div>
                <h3>Rank flex</h3>
                <p>Unranked</p>
             </div>
            <div>
                <h3>Rank flex</h3>
                <p>Unranked</p>
             </div>
            </>
        }




   {/* {   ranks.length > 0 && 
     <>
    <div>
            <h3>Rank solo/duo</h3>
            <img className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${ranks[0].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
            <p>{`${ranks[0].tier} ${ranks[0].rank}`}</p>
        </div>
    
  
        <div>
        <h3>Rank flex</h3>
        <img  className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${ranks[1].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
        <p>{`${ranks[1].tier} ${ranks[1].rank}`}</p>
        </div>
        </>
        } */}
    

        
        {/* // : 
        // <>
        // <div>
        //     <h3>Rank solo/duo</h3>
        //     <p>Unranked</p>
        // </div>
        // <div>
        //     <h3>Rank flex</h3>
        //     <p>Unranked</p>
        // </div>
        // <div></div>
        // </> */}
        
            
        

    </div>
  )
}
const mapStateToProps = (state)=>{
    const {API_KEY} = state  
    return {API_KEY}
}
export default connect(mapStateToProps)(Profile)