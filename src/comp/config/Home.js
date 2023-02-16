import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carde from '../card/Carde'
// import Cards from '../card/card'

const Home = () => {
    let data = [
        {name : 'hafeez',
        id:1,
        src: "data:image/jpeg;base64,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",
        school:'Saims awdawd'},
        {name : 'waqar',
        id:1,
        src: "data:image/jpeg;base64,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",
        school:'saylaniawdawd awdawd'},
        {name : 'huzaifa',
        id:1,
        src: "data:image/jpeg;base64,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",
        school:'experitzo awdawd'},
        {name : 'ali',
        id:1,
        src: "data:image/jpeg;base64,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",
        school:'experitzo awdawd'},
        {name : 'aqleema',
        id:1,
        src: "data:image/jpeg;base64,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",
        school:'experitzo awdawd'},
    ]
    const navigate = useNavigate()
    const moveData = (e)=>{
        navigate('/contact',{
            state: e
        })
    }
  return (
    <div>
      I M home
    <Grid container >
{data.map((value,i)=>{
    return(

        <Grid md={3} sm={3} xs={6} key={i} item> 
    <Carde clickdata={moveData}  value={value} />
    
    </Grid>
        )
    })}

    </Grid>

    </div>
  )
}

export default Home