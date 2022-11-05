import axios from 'axios'
import React, { useState, useEffect } from 'react'
export default function MemberPlansFinal() {
    const [MemberplansItems, setMemberplans] = useState([])
    async function fetchData() {
        const response = await axios.get('http://localhost:4094/api/Member/GetAllPlansByMember?username=Jethalal')
        console.log(response.data)
        setMemberplans(response.data)

    }
    useEffect(() => {
        fetchData()
        //   .then((res) => {
        //     setMemberplans(res)
        //   })
        //   .catch((e) => {
        //     console.log(e.message)
        //})
    }, [])
    return (
        <div>
            {MemberplansItems? MemberplansItems.map((item) => {
                <p>Member Plan Id={console.log(item.id)}</p>
            }):<>Hii</>}
            </div>)
}



    //   {/* {MemberplansItems.map((item) => {
        
    //     //   <h2>Hii this is member's plan</h2>
    //       <div className="MemberPlans">
    //         <h2>Member Plan details</h2> 
    //         {
    //            <div class="boxed">
                            
    //                                 <td>Member Plan Id={item.id}</td>
    //                                 <br/>
    //                                 <td>Plan name={item.pId}</td>
    //                                 <br/>
    //                                 <td>Plan Duration={item.duration}</td>
    //                                 <br/>
    //                                 <td>Plan Amount={item.amount}</td> 
    //                                 <button className='btn btn-warning'>update plans</button>
    //                     </div>
    //            }
                
            
    //          */}
    //     {/* </div>
          
        
    //   })} */}
    

    

