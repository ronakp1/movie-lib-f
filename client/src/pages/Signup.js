import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { login, register } from '../components/services/AuthService';
import styles from '../styles/LoginSignup.module.css';

function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signIn, setSignIn] = useState(false);
    const [toHomepage, setToHomepage] = useState(false);
    const [message, setMessage] = useState(null);
    const { pathname } = useLocation();
    const counter = useRef(0);
    // console.log("path1", pathname);

    if (toHomepage === true) {
        <Redirect to="/discover/popular" />
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await register(formData);
        if (res.message.msgError) {
            setMessage(res.message.msgBody);
        }
        if (res.message.msgError === false) {
            setMessage(res.message.msgBody);
        }

    }




    return (
        <div className={styles.containerHold}>
            <div className={styles.container}>
                <h1>Sign Up</h1>
                {/* <form action="" method="POST"> */}
                <form onSubmit={handleSubmit} >
                    <div className={styles.username}>
                        <label for="username"> Username </label>
                        <input name="username" placeholder="username" type="text" onChange={handleChange} />
                    </div>
                    <div className={styles.password}>
                        <label for="password"> Password </label>
                        <input name="password" type="password" onChange={handleChange} />
                    </div>
                    {/* {pathname === '/signup' ? <button onClick={handleSubmit}>Sign Up</button>
                    : <button onClick={handleSubmit}>Log in</button>
                } */}
                    <button onClick={handleSubmit}> Sign Up </button>
                    {message ? <div className={styles.message}>{message}</div> : null}

                </form>
            </div>
        </div>
    )
}

export default Signup
