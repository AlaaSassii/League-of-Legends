import React,{useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// ui 
import { Button } from '@material-ui/core' 
import { TextField } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import Loading from '../Loading/Loading'
const Champions = () => {
    let navigate = useNavigate() ; 
    const [v ,setV] = useState('12.10.1')
    const [loading, setLoading] = useState(true)
    const [Champions,setChampions] = useState([])
    const  [Championss,setChampionss] = useState([]);
    const [value , setValue] = useState('')
    const types = ["Assassin","Fighter","Mage","Marksman","Support","Tank"]
    function updateVersion() {
        console.log("asdasd")
        axios('https://ddragon.leagueoflegends.com/api/versions.json')
            .then(resp => setV(resp.data[0]))
            .catch(err => console.log(err))
    }
    function filterTypes(type){
        const arr = Championss.filter(champ => {
            let condition =false
            console.log(condition)
            for(let i=0;i<champ.tags.length;i++){
                if (champ.tags[i] ===type) condition = true
            }
            if(condition)return true ; else return false 
        })
        console.log(arr)
        setChampions(arr)
    }

    useEffect(()=> {
        setLoading(true) ; 
        axios(`http://ddragon.leagueoflegends.com/cdn/${v}/data/en_US/champion.json`)
            .then(resp => {
                setChampions(Object.values(resp.data.data)) ;
                setChampionss(Object.values(resp.data.data));
                console.log(Object.values(resp.data.data))
                setLoading(false)
        })
            .catch(err => console.log(err))
    },[])
    const handleChange = e => {
        setValue(e.target.value)
        const Value = e.target.value 
        setChampions(Championss.filter(champ => champ.name.toLowerCase().includes(e.target.value.toLowerCase()) ))
    }

  return (
    <div className="champions-page">
       
        {
            loading? <Loading/>: <div>
    <div className="champions-buttons">
        <TextField  value={value} onChange={e => handleChange(e) }
         variant='filled' color="primary" label="type champion name" size='small' className="search-reseach" />
       <div style={{display:"inline",marginTop:"20px"}}>
    <ButtonGroup style={{marginTop:"5px",marginLeft:"5px"}}>
    <ButtonGroup className="options-types-champs" >
        {types.map(type =><Button onClick={()=>filterTypes(type)}  key={type}>{type}</Button>)}
     
        </ButtonGroup>
    </ButtonGroup>
    </div>

        </div>


            <div  className="champions">
            {Champions.map(champ => {
                return(
                    <div key={champ.id} onClick={()=>navigate(`/Champions/${champ.id}`)} >
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${v}/img/champion/${champ.image.full}`} />
                    <h4 >
                    {champ.name}
                    </h4>
                    </div>)})}
            </div>
        </div>
        }
    </div>
  )
}

export default Champions
// Championss.length > Champions.length &&