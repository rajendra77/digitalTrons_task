import React from 'react'
import './Timeslot.css'

const Timeslot =(props)=>{
    return(
        <div style={{background:props.available ? '#655b5b' :'red'}} className="timeslot" onClick={()=>props.clicked(props.id)} key={props.id}>
           {props.timing}
        </div>
    )
}

export default Timeslot
