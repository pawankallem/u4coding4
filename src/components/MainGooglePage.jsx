import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearch } from "../Redux/action.js";
import {searchInData} from "../Redux/action/dataAction.js"
import axios from "axios";


export const MainGooglePage = () => {

    const [word,setWord]=useState("")

    const navigate=useNavigate();
    const dispatch=useDispatch();

    // data base start 

    const gettingDb=()=>{
      axios.get("https://fast-reef-22226.herokuapp.com/data").then((res)=>{
        // console.log("inside database",res.data)       
        dispatch(searchInData(res.data));
      })
    }

    // data base ends 


    const handleKeypress = (e) => {
      let key=e.charCode  //||  e.key || e.keyCode 
      if (key === 13) {
        
         dispatch(addSearch(word));  //action => dispatch => store => view
         gettingDb();
        navigate(`/search?q=${word}`)
      }
    };

    const handleChange=(e)=>{
        setWord(e.target.value)
    }
  
    return (
      <div>
        <span onClick={()=>{
          navigate("/")
        }}>
        <img
          src="https://imgs.search.brave.com/pC67KXWZACgFqhaeCuoVNIIyeGFW4PU0yAmPBUVG-Nw/rs:fit:1404:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/cUVJQ0M1OVBMMVZy/ZGVmaEdFcXFnSGFD/ZyZwaWQ9QXBp"
          alt="Google"
        />
        </span>
        <input
          className="search-box"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeypress}
          placeholder="Search"
        />
      </div>
    );
  };
  