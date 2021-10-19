import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../FireBase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user,setUser]=useState({});
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }

    if (user) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
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

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth,email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }


  


    const signInUsingGoogle = () => {
      setIsLogin(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() =>  setIsLogin(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLogin(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
      setIsLogin(true);
        signOut(auth)
            .then(() => { })
            .finally(() =>  setIsLogin(false));
    }

  
    return {
        user,
        error,
        setIsLogin,
        handleNameChange,
        handleEmailChange,
        handleRegistration,
        handlePasswordChange,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;