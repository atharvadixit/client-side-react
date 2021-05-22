import React, { Component } from 'react';
import {Spinner} from 'reactstrap';
import TableOfUsers from './TableOfUsers';

class SpringBoot extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            isClicked: false,
            isLoading: false
        };
    }

    fetchData = () =>{

        this.setState(
            {
                isLoading:true
            }
        )

        this.setState({
            isClicked: true
        })

        setTimeout(function() {
  
            this.setState({
              isLoading : false,
          });
      }.bind(this), 200)
    }

    render(){
        return (
            <div className="container">
                <br/>
                <h2>Click the below button to make API call to SpringBoot Server</h2>
                <center>
                <button className="btn btn-dark" onClick={this.fetchData}>
                    Make API Call
                </button>
                </center>
                <br></br>
                <div className="row">
                    {this.state.isClicked?<TableOfUsers />:<p></p>}
                </div>
            </div>
        );
    }
}

export default SpringBoot;