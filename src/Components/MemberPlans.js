import React, { useEffect, useState } from 'react';
import './MemberPlans.css'


function MemberPlans() {
    const[data,setData]=useState([])

    const url=("")
    useEffect(()=>{
        fetch(url)
        .then(response=>console.log(response.json()))
        .then(json=>{
            console.log("jsooon",json)
            setData(json)
        }).catch(e=>{
            console.log("e",e)
        })
    }, [])
    return (
        <div className="MemberPlans">
            <h2>Member Plan details</h2> 
            {
               <div class="boxed">
                            
                                    <td>Member Plan Id={data.Id}</td>
                                    <br/>
                                    <td>Plan name={data.pName}</td>
                                    <br/>
                                    <td>Plan Duration={data.duration}</td>
                                    <br/>
                                    <td>Plan Amount={data.amount}</td> 
                                    <button className='btn btn-warning'>update plans</button>
                        </div>
               }
                
            
            
        </div>
    );
}

export default MemberPlans;