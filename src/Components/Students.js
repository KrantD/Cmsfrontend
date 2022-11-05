import React from 'react'
import './Students.css'
class Students extends React.Component{
    constructor(props){
            super(props);
           // console.log("Students Constructed");
    }
    render(){
        
        return(
            <div className="alert alert-info">
                <h2>Students Details</h2>
                Student Id : {this.props.sid}
                <br/>
                Student Name : {this.props.sname}
                <br/>
                Student Age : {this.props.sage}
                <br/>
                {new Date(2022,9,27).toISOString()}
            </div>

        );
    }

}
export default Students;