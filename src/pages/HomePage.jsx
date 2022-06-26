import React, {useEffect} from 'react'
import NavBarHome from "../Components/User/NavBarClient";
import Home from "../Components/User/Home";
import {post} from "../utils/http";

export const HomePage = () => {
useEffect(()=>{
    post('').then()
})
    return(
        <div>
            <div><NavBarHome/></div>
            <div><Home/></div>
        </div>
    )

}
