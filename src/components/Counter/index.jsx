import React,{useReducer} from "react";
import { Reducer } from "../../Reducer";



// const { reduser } = require("Reduser");
// const { useReducer } = require("react");

const counter =() =>{
    const initialState =localStorage.getItem("count")
    ?Number(localStorage.getItem("count")): 0;

    const [state, dispatch] = useReducer(reduser, initialState);
    return(
        <div>
         <h1>Count:{state}</h1>
         <button onClick={() =>dispatch ({type:"INC"})}>INCREMENT</button>
         <button onClick={() =>dispatch ({type:"INC"})}>DECREMENT</button>
         <button onClick={() =>dispatch ({type:"RESET"})}>reset</button>
        </div>
    )

}
export default counter;