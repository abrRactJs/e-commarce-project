import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Login.css'
import firebaseConfig from '../../firebase.config';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { FaGoogle } from "react-icons/fa";
import { loggdInContext } from '../../App';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(loggdInContext)
    const nevigate = useNavigate();
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: '',
        password: '',
        image: '',
        error: '',
        success: false,
        pAddress: "",
        prAddress: "",
        phone: "",
    })

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result._tokenResponse;
                const { displayName, email, photoUrl } = user;
                console.log(displayName, email)
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    image: photoUrl
                }
                setUser(signInUser)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    const googleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out")
                const userSignOut = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    image: ''
                }
                setUser(userSignOut)
            })
            .catch((error) => {
                console.log(error)
            });
    }




    const handleFormInput = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const handleFormSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUser(user.name, user.image)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = errorMessage
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    nevigate("/Shipment", {replace : true})
                    console.log("profile updated 12", res._tokenResponse)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = errorMessage
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }

    const updateUser = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        }).then(() => {
            console.log("Profile updated!") 
           
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <div className='login'>
            <h5 className='text-danger mb-4 text-center text-capitalize'>Please login first then you can submit the order </h5>
                <div className="signUpBtn my-3">
                    <button onClick={() => setNewUser(!newUser)} className='btn btn-outline-success'> {newUser ? "Sign In" : "Register"}</button>
                </div>
              
                {newUser ?
                    <div className="loginForm">
                        <LoginForm
                            handleFormInput={handleFormInput}
                            handleFormSubmit={handleFormSubmit}
                        ></LoginForm>
                    </div> :
                    <div className="signUpForm loginForm mt-4">
                        <SignUpForm
                            handleFormInput={handleFormInput}
                            handleFormSubmit={handleFormSubmit}
                        ></SignUpForm>
                    </div>}

                <div className="text-center text-danger mt-3">
                    <h6>   {user.error}</h6>
                    {user.success && <h6 className='text-success'> account {newUser ? "created" : "Logged In"} Sucessfull </h6>}
                </div>
                <div className="signInGoogleContainer">
                    {user.isSignIn && <h3 className='text-primary'>Wellcome : {user.name}</h3>}
                    <h6 className='mb-3 text-danger'>Or Continue Others</h6>
                    {user.isSignIn ? <button
                        onClick={googleSignOut}
                        className='btn btn-danger'>
                        Sign Out With Google

                    </button> : <button
                        onClick={googleSignIn}
                        className='btn btn-warning'>
                        <FaGoogle></FaGoogle>  Sign In With Google

                    </button>}
                </div>





            </div>

        </>
    );
};

export default Login;