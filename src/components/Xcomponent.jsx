import React from 'react'
import { connect } from 'react-redux';

function Xcomponent(props) {
    console.log(props)
    return (
        <div>
             <h1> Increment X : {props.valuex} <button>Increment Y</button> </h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        valuex:state.valuex
    }
}

export default connect(mapStateToProps)(Xcomponent)