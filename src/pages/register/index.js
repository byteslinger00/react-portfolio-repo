import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {useNavigate } from 'react-router-dom';
import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { register }  from '../../store/actions/auth.action'

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        register({name, email, password})
    }
    return (
        <Container className=''>
            <form>
            <h3>Sign Up?</h3>
            <div className="mb-3">
                <label>Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                 />
                
            </div>
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
                <label>Confirm-Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter Re-password"

                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                />
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
                Sign Up
                </button>
            </div>
            </form>
        </Container>
      )
   }
