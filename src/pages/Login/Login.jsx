import React, { useRef, useState } from 'react';
import './Login.css';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false); 
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (isSignUp) {
            const name = nameRef.current.value;
            console.log("Sign-Up Details:", { name, email, password });
        } else {
            console.log("Login Details:", { email, password });
        }
    };

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google");
    };

    const handleMicrosoftSignIn = () => {
        console.log("Sign in with Microsoft");
    };

    return (
        <div className="login-container">
            <div className="login">
                <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            ref={nameRef}
                        />
                    )}
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    <button type="submit" className="login-button">
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>
                {!isSignUp && (
                    <div className="alternative-login">
                        <button
                            className="google-button"
                            onClick={handleGoogleSignIn}
                        >
                            Sign in with Google
                        </button>
                        <button
                            className="microsoft-button"
                            onClick={handleMicrosoftSignIn}
                        >
                            Sign in with Microsoft
                        </button>
                    </div>
                )}
                <div className="toggle-link">
                    {isSignUp ? (
                        <p>
                            Already have an account?{" "}
                            <button
                                className="toggle-button"
                                onClick={() => setIsSignUp(false)}
                            >
                                Login
                            </button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <button
                                className="toggle-button"
                                onClick={() => setIsSignUp(true)}
                            >
                                Sign Up
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
