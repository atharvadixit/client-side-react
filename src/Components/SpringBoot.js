import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Spinner} from 'reactstrap';

class SpringBoot extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            urlUsers: "https://glacial-headland-06013.herokuapp.com/getUserData",
            urlAddress: "https://glacial-headland-06013.herokuapp.com/getCompanyData",
            data: [],
            isUserLoading: false,
            isAddressLoading: false,
            isUserLoaded: false,
            isAddressLoaded: false
        };
    }

    makeAddressCall = () =>{
        fetch(this.state.urlAddress, {async: false}).then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    data: result,
                    isAddressLoaded: true
                });
            }
        )
    }

    fetchAddressData = () =>{

        this.setState(
            {
                isAddressLoading:true,
                isUserLoaded: false
            }
        )
        
        this.makeAddressCall();


        setTimeout(function() {
  
            this.setState({
              isAddressLoading : false,
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
                isAddressLoaded: false
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
                        <button className="btn btn-dark" onClick={this.fetchAddressData}>
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

                {this.state.isAddressLoaded == false?<p></p>:
                                <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Sr no</th>
                                    <th>Street</th>
                                    <th>Suite</th>
                                    <th>City</th>
                                    <th>Zip Code</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(user => (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.suite}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.address.zipcode}</td>
                                            <td>{user.address.geo.lat}</td>
                                            <td>{user.address.geo.lng}</td>
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

export default SpringBoot;