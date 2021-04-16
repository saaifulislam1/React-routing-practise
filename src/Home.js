import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Home = () => {
    const handleclick=(friendinfo)=>{

    }

    const [users,setusers]=useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setusers(data))
      

    },[])

    return (
        <div>
            <h1>Number of friend</h1>
            <h2>{users.length}</h2>
            {
                users.map(friend =><Link onClick={handleclick(friend)} to={`/about/${friend.id}`} ><li> {friend.name}</li></Link>)
            }
           
            
          

 
        </div>
    );
};

export default Home;