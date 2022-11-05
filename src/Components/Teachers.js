import React from 'react';
class Teachers extends React.Component{
    constructor(props){
        super(props);
        //console.log("Teacher Constructed");
    }

      render(){
        return(
            <div className='alert alert-danger'>
                <h2>Teachers Details</h2>
                Teacher Id: {this.props.tid};
                <br/>
                Teacher Name: {this.props.tname};
                <br/>
                Teacher Age: {this.props.tage};
                <br/>
            </div>
        );
      }
}
export default Teachers;