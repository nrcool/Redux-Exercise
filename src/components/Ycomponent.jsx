import React from 'react'
import { connect } from 'react-redux';
function Ycomponent(props) {
    return (
        <div>
            <h1> Increment Y : {props.valuey}  <button onClick={props.incrementValueX}>Increment X</button> </h1>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        valuey:state.valuey
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        incrementValueX:()=>dispatch({type:"incrementX"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ycomponent)