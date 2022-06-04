import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {useNavigate } from 'react-router-dom';
import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';



export const Login = () => {

    // let {email, password} = this.state;
    // let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
         
        <Container className=''>
            <form>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                
                 />
                
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                

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
   
