import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BackgroundInfo from '../Components/BackgroundInfo';
import Info from '../Components/Info';
import Skins from '../Components/Skins';
import Loading from '../Loading/Loading';




const ChampionInfo = () => {
    let {id} = useParams() 
    const [loading, setLoading] = useState(true) ; 
    const [data , setData] = useState({}) ; 
    useEffect(()=> {
        setLoading(true)
        axios(`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/${id}.json`)
            .then(resp => {
                // console.log(resp.data.data[id]) ; 
                setData(resp.data.data[id])
                setLoading(false)
                    }) 
            .catch(err => console.log(err))
    },[id])
    const {skins,spells,name,image} = data 
   
   return (
    <div>
        {loading ? <><Loading/></>: <>
        {/* <h1>{name}</h1> */}

        <BackgroundInfo {...data}/>
        <Info {...data}/>
        <Skins skins={skins} name={name}/>
        </>}    

    </div>
  )
}

export default ChampionInfo