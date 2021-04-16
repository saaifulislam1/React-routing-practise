import React, { useEffect, useState } from 'react';

import {useParams} from "react-router-dom";

const About = () => {
    const {userId}=useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))

    },[])
    return (
        <div>
            <h1>This is about page of {userId}</h1>
            <h2>and user {userId} name is {user.name}</h2>
        </div>
    );
};

export default About;