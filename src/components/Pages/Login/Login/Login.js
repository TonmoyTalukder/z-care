import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';



const Login = () => {

  const {signInUsingGoogle,
    error,
    handleEmailChange,
    handleRegistration,
    handlePasswordChange} = useAuth();
  return (
      <>
        <div className="mb-5 mt-5">
           <h2 className="mb-5 text-primary">Please Login</h2>
           <form action="" onSubmit={handleRegistration}>

               <input type="email" onBlur={handleEmailChange} name="email" id=""  placeholder="example@email.com" required/>
               <br />
               <br />
               <input type="password" onBlur={handlePasswordChange} name="password" id=""  placeholder="please Input Your Password" required/>
               <br />
               <p>{error}</p>
               <br />
               <input type="submit" value="Submit" className="btn btn-secondary"/>
               <br />
               <Link to="/signup">New Member ?</Link>
               
           </form>
       </div>
        <div className="mb-5">
         <hr />
          <button onClick={signInUsingGoogle} className="btn btn-warning mb-5 mt-">Google Sign in</button>
        </div>
      </>
  );
}

export default Login;