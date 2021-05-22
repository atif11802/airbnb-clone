import React from 'react'
import "./Banner.css"
import {Button } from  "@material-ui/core";
import {useState} from "react";
import Search from "./Search.js";

import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();

    const[showSearch,setShowSearch]=useState(false);


    return (
        <div className="banner">

            <div className="banner__search">
            {showSearch && <Search /> }
                <Button onClick={()=>setShowSearch(!showSearch)} varient="outlined" className="banner__searchButton">
                    
                   {
                       showSearch?"Hide":"Search Dates"
                   }
                    
                    </Button>
                
            </div>

           <div className="banner__info">
               <h1>here you find your perfect sunset</h1>
               <h5>
                   did you know ! you can find your peace inner yourself!!!!!???
               </h5>
               <Button onClick={()=>history.push("./search")} varient="outlined">Exlore Nearby</Button>
           </div>
        </div>
    )
}

export default Banner
