
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../FireBase/firebase.init';
import useAuth from '../../hooks/useAuth';



import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile  } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();




initializeAuthentication();

const auth = getAuth();

const SignUp = () => {

    const {emailSignUpLogIn,signInUsingGoogle} = useAuth();

    // const [displayName, setDisplayName] = useState('');
    // const [email , setEmail] = useState('');
    // const [password , setPassword] = useState('');
    // const [error, setError] = useState('');

    // const handleEmailChanges = e => {
    //     setEmail(e.target.value);
    //   }
    //   const handlePasswordChanges = e => {
    //     setPassword(e.target.value)
    //   }
    //   const handleNameChanges = e => {
    //     setDisplayName(e.target.value);
    //   }

    //   const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     if (password.length < 6) {
    //       setError('Password Must be at least 6 characters long.')
    //       return;
    //     }
    //     else {
    //       registerNewUser(email, password);
    //     }
    
    //   }
    //   const registerNewUser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //         setError('');
    //       })
    //       .catch(error => {
    //         setError(error.message);
    //       })
    //   }

    // return (
    //     <div>
    //         <div className="mb-5 mt-5">
    //        <h2 className="mb-5 text-primary">Please Register</h2>
    //        <form action=""  onSubmit={handleRegistration }>
    //            <input type="text" onBlur={handleNameChanges}  name="displayName" id=""  placeholder="mr.jhon" required/>
    //            <br />
    //            <br />
    //            <input type="email" onBlur={handleEmailChanges} name="email" id=""  placeholder="example@email.com" required/>
    //            <br />
    //            <br />
    //            <input type="password"  onBlur={handlePasswordChanges} name="Password" id=""  placeholder="Enter Your Password" required/>
    //            <br />
    //            <br />
    //            <input type="submit" value="Submit" onClick={emailSignUpLogIn} className="btn btn-secondary"/>
    //            <br />
    //            <Link to="/login">Already register ?</Link>
    //        </form>
    //    </div>
    //    <div className="mb-5">
    //      <hr />
    //       <button onClick={signInUsingGoogle} className="btn btn-warning mb-5 mt-">Google Sign in</button>
    //     </div>
    //     </div>






    const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [error, setError] =useState('');
  const [isLogIn, setIsLogIn] =useState(false);

  const auth = getAuth();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, GoogleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  }

  const toggoleLogin= e => {
    setIsLogIn(e.target.checked);
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleRegistration = e =>{
    e.preventDefault();
    console.log(name, email, password);
    if(!/(?=.*[!@#$&*])(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[0-9].*[0-9]).{8}/.test(password)){
      setError('Password should be at least 8 characters and must contain a special case, 2 upper case letters, 3 lower case letters and 2 digits.');
      return;
    }
    
    isLogIn? processLogIn(email, password): registerNewUser(email, password);
  }

  const processLogIn = (email, password)  => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
  }

  const registerNewUser = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      verifyEmail();
      setUserName();
    })
    .catch(error => {
      setError(error.message);
    })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {displayName: name})
    .then(result => {
      console.log(result);
    })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
      console.log(result);
    })
  }

  const handleResetPassword = () =>{
    sendPasswordResetEmail(auth, email)
    .then(result => { })
  }

  return (
    <div className="m-5">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary text-center mb-5">Please {isLogIn ? 'Log In': 'Register'}</h3>
        {!isLogIn && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name"/>
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={ handleEmailChange } type="email" className="form-control" id="inputEmail3"  placeholder="Your Email" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={ handlePasswordChange } type="password" className="form-control" id="inputPassword3"  placeholder="Your Password" required/>
          </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input onChange={toggoleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" htmlFor="gridCheck1">
              Already Registered?
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-3 text-danger">
        {error}
      </div>
      <button type="submit" className="btn btn-primary">{isLogIn ? 'Log In': 'Register'}</button>
      <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm mx-2">Reset Password</button>
    </form>
      
      <br />
      <br />
      <br />
      <div className="mb-5">
         <hr />
          <button onClick={signInUsingGoogle} className="btn btn-warning mb-5 mt-">Google Sign in</button>
      </div>
    </div>

    );
};

export default SignUp;