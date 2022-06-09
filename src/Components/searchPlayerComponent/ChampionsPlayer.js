import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import Champion from './Champion';
import { FiChevronDown ,FiChevronUp} from "react-icons/fi";
import Loading from '../../Loading/Loading';

const ChampionsPlayer = ({api,region,id}) => {
    const [number ,setNumber] = useState(4)
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
      setLoading(true)
      axios(`https://${region}/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${api}`)
      .then(resp => {setData(resp.data.slice(0,number)); setLoading(false)})
      .catch(err => console.log(err))
    },[number])
  return (
    <div className='champs-player' >{
      !loading ?
      <>
        {
         data.length >0 && data.map((data,index)=>{
          return <Champion key={data.championId} {...data} />
        })
        }
       {number < 8 && <button onClick={()=>{number <8 && setNumber(number + 4 )}}><FiChevronDown/></button>}
       {number > 4 && <button onClick={()=>{number >4 && setNumber(number - 4 )}}><FiChevronUp/></button>}
       </>
      : <Loading/> 
      }
    </div>
  )
}
const mapStateToProps = (state) => { 
    return {api : state.API_KEY}
}
export default connect(mapStateToProps)(ChampionsPlayer)