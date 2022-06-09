import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading';

const Champion = ({championId,championLevel,championPoints,lastPlayTime}) => {
    const [image , setImage] = useState('') ; 
    const [champName,setName] = useState('') ;
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setLoading(true)
      axios('http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json')
      .then(resp =>{ 
        // const data =
        const data =( Object.values(resp.data.data).find(champ =>champ.key == championId ))  
        setImage(data.image.full)
        setName(data.name)
        setLoading(false)
      }) 
      .catch(err => console.log(err))
    },[championId])
  return (
    <div className="champ-player">
     {!loading ? 
     <>
     <div>
      <img src={`https://opgg-static.akamaized.net/images/lol/champion/${image}?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1654157118862`}/> 
      <h5>{champName}</h5>
      </div>
      <div>
        <h4>
        championLevel
        </h4>
        <p>{championLevel} lvl</p>
      </div>
      <div>
      <h4>
      championPoints
        </h4>
        <p>{championPoints}pts</p>
      </div> 
      </>: <Loading/>}
    </div>
  )
}

export default Champion