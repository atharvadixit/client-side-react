import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

class TableOfUsers extends Component{

    constructor(props){
        super(props);
        this.state = {
            url: "https://glacial-headland-06013.herokuapp.com/getUserData",
            data: [], 
            isLoaded: false
        }
    }

    componentDidMount(){
        this.makeApiCall()
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

    render(){
        return (
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
        );
    }
}

export default TableOfUsers;