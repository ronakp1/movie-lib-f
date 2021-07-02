import React, { useEffect, useState, useRef, useContext } from 'react';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import { isAuth, login, register } from '../components/services/AuthService';
import styles from '../styles/LoginSignup.module.css';
import { AuthContext } from '../components/services/AuthContext';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signIn, setSignIn] = useState(false);
    const [toHomepage, setToHomepage] = useState(false);
    const [message, setMessage] = useState(null);
    const { pathname } = useLocation();
    const counter = useRef(0);
    const authContext = useContext(AuthContext);
    // console.log("path1", pathname);
    let history = useHistory();

    useEffect(() => {
        <Redirect to="/discover/popular" />
    }, [toHomepage])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // console.log("inhere1", formData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(formData);
        // console.log(res);

        const { isAuthenticated, username } = res

        if (isAuthenticated) {
            authContext.setUser(username);
            authContext.setIsAuthenticated(isAuthenticated);
            setToHomepage(true);
            setMessage("Succesfully logged in");
            history.push('/');
        }
        else {
            setMessage("Incorrect username or password");
        }
    }

    return (
        <div className={styles.containerHold}>
            <div className={styles.container}>
                <h1>LOG IN</h1>
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
                    <button onClick={handleSubmit}> Login </button>
                    {message ? <div className={styles.message}>{message}</div> : null}

                </form>
            </div>
        </div>
    )
}

export default Login
