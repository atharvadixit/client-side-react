import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Spinner} from 'reactstrap';

class NodeExpress extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            url: "https://node-express-react-server.herokuapp.com/getUsersData",
            data: [], 
            isClicked: false,
            isLoading: false,
            isLoaded: false
        };
    }

    makeApiCall = () =>{
        fetch(this.state.url, {async: false}).then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result,
                    isLoaded: true
                });
            }
        )
    }

    fetchData = () =>{

        this.setState(
            {
                isLoading:true
            }
        )
        
        this.makeApiCall();

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
                <h2>Click the below button to make API call to the Node-Express Server</h2>
                <center>
                <button className="btn btn-dark" onClick={this.fetchData}>
                    Make API Call
                </button>
                </center>
                <br></br>
                <div className="row">
                <div className="container">
                {this.state.isLoaded == false?<p></p>:
                <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
              </Table>
            }
            </div>
                </div>
            </div>
        );
    }
}

export default NodeExpress;