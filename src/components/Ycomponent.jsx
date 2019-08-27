import React from 'react'
import { connect } from 'react-redux';
function Ycomponent(props) {
    return (
        <div>
            <h1> Increment Y : {props.valuey}  <button>Increment X</button> </h1>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        valuey:state.valuey
    }
}
export default connect(mapStateToProps)(Ycomponent)