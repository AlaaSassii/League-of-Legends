import React from 'react'
import './style.css'
const Home = () => {
  return (
    <div>
        <div className="background-image-home"></div>
        <h2 className='title'>common questions of the game </h2>
        <div className='underline'></div>
        <section className="context">
        <div>
        <h1>League of Legends</h1> 
        <p>League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.</p>
        </div>
        <div className='img'>
            <img src='https://www.kindpng.com/picc/m/540-5409917_blue-league-legends-icons-of-symbol-garena-transparent.png' />
        </div>
        </section> 
        <section className="context context-change">
        <div className='img'>
            <img src='https://ih1.redbubble.net/image.3142361537.4763/st,small,507x507-pad,600x600,f8f8f8.u1.jpg' />
        </div >
        <div>
        <h1>Is League of Legends a Fun Game to Play ?</h1> 
        <p>League is an easy game to learn. Its entry skill is pretty low, and the whole experience of picking up LoL is fun. In every match, you find different challenges which become easier and easier each time you sit down to play. Once you start logging in every day, you also start seeing progress.</p>
        </div>
      
        </section>
        <section className="context">
        <div>
        <h1>Is League of Legends addicting?</h1> 
        <p>Perhaps one of the biggest reasons behind LoL addiction is due to the fact that the simple situations we just mentioned are super easy – when you make the correct decision, this causes the brain to release dopamine – this happens every couple of seconds.</p>
        </div>
        <div className='img'>
            <img src='https://i.redd.it/x53fzb693qa31.png' />
        </div>
        </section>
    <section className="context context-change">
        <div className='img'>
            <img src='https://preview.redd.it/z0jtqyyd14141.png?auto=webp&s=38b825c61ef326f9c8c4fa4643b32986948fe28d' />
        </div >
        <div>
        <h1>How much time does it take to be good at LoL?</h1> 
        <p>Originally Answered: How do I get good in League of Legends? 0–3 months: learn about every single champion: their names and most common roles, their abilities and passives, about who does the most damage and who has the most health.</p>
        </div>
      
        </section>
    </div>
  )
}

export default Home