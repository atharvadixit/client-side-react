import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import nodeL from '../node.jpeg';
import spring from '../spring.jpg';
import windows from '../windows.jpg';
import prometheus from '../prometheus.svg';
import mySQL from '../mysql.png';
import linux from '../linux.png';

class Home extends Component{
    render(){
        return (
            <div>
                <div className="container">
                    <br/>
                    <center>
                        <h1>Welcome to Infrastructure Monitoring System!</h1>
                        <br/>
                        <h3>The following Applications are monitored in the Project</h3>
                    </center>
                <br/>
                <div className="row disp">
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={nodeL} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Node Server</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={spring} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Spring Server</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={mySQL} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">MySQL Server</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row disp">
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={linux} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Linux Server</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={windows} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Windows Server</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 padd">
                        <div className="card">
                            <img src={prometheus} className="card-img-top" alt="..." style={{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Prometheus Server</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default Home;