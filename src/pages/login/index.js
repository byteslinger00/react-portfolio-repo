import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import React, { Component} from 'react';
import { userState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { changeLoginStatus } from "../../store/actions/auth.action"



export const Login = () => {
    const history = useHistory();
    const usersInfo = useSelector(state => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        usersInfo.users.forEach(user => {
            if (user.name === username && user.password === user.password) {
                changeLoginStatus(true);
                history.push("/home")
            }
        })

        
    };
    

    if (user) {
        return <div>{user.name} is logged in </div>;
    }

    // let {email, password} = this.state;
    // let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
         
        <Container className=''>
            <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>User Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter UserName"
                value={username}
                onChange={({target}) => setUsername(target.value)}
                
                 />
                
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                value={password}
                placeholder="Enter password"
                onChange={({ target }) => setPassword(target.value)}

                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                </label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" >
                Sign In
                </button>
                <Link to="/register">
                    Sign UP with Email?
                </Link>
            </div>
            
            </form>
        </Container>
      )
   }
   
