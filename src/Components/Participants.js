import React from 'react'
import Player from './Player'

const Participants = ({participants,regionLink}) => {
    console.log("participants",participants)
  return (
    <div style={{display:"flex" ,border:'solid 1px #000',width:"30%",marginLeft:"10%",justifyContent:"space-between"}}>
      <div>
        {
            participants.slice(0,4).map((player,index)=><Player regionLink={regionLink} {...player} key={index}/>)
        }
      </div>
      <div>
        {
            participants.slice(5,9).map((player,index)=><Player  regionLink={regionLink} {...player} key={index}/>)
        }
      </div>
    </div>
  )
}

export default Participants