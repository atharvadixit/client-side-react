import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Spinner} from 'reactstrap';

class NodeExpress extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            urlUsers: "https://node-express-react-server.herokuapp.com/getUsersData",
            urlCompany: "https://node-express-react-server.herokuapp.com/getCompanyData",
            data: [],
            isUserLoading: false,
            isCompanyLoading: false,
            isUserLoaded: false,
            isCompanyLoaded: false
        };
    }

    makeCompanyCall = () =>{
        fetch(this.state.urlCompany, {async: false}).then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result,
                    isCompanyLoaded: true
                });
            }
        )
    }

    fetchCompanyData = () =>{

        this.setState(
            {
                isCompanyLoading:true,
                isUserLoaded: false
            }
        )
        
        this.makeCompanyCall();


        setTimeout(function() {
  
            this.setState({
              isCompanyLoading : false,
          });
      }.bind(this), 200)
    }
    
    
    makeUsersCall = () =>{
        fetch(this.state.urlUsers, {async: false}).then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result,
                    isUserLoaded: true
                });
            }
        )
    }

    fetchUsersData = () =>{

        this.setState(
            {
                isUserLoading:true,
                isCompanyLoaded: false
            }
        )
        
        this.makeUsersCall();


        setTimeout(function() {
  
            this.setState({
              isUserLoading : false,
          });
      }.bind(this), 200)
    }

    render(){
        return (
            <div className="container">
                <br/>
                <h2>Click the below button to make API call to the Node-Express Server</h2>
                <br/>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-8">
                        <button className="btn btn-dark" onClick={this.fetchUsersData}>
                            Get Users Data
                        </button>
                    </div>
                    <div className="col-lg-6 col-lg-offset-4">
                        <button className="btn btn-dark" onClick={this.fetchCompanyData}>
                            Get Company Data
                        </button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                <div className="container">
                    {this.state.isUserLoaded == false?<p></p>:
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

                {this.state.isCompanyLoaded == false?<p></p>:
                                <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Sr no</th>
                                    <th>Company Name</th>
                                    <th>Company Moto</th>
                                    <th>Area of work</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(user => (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.company.catchPhrase}</td>
                                            <td>{user.company.bs}</td>
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