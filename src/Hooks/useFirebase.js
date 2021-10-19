import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState, useEffect } from 'react'
import initializeFirebase from '../Firebase/firebase.init';

//get firebase initialization
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    //get auth
    const auth = getAuth()
    //google provider
    const googleProvider = new GoogleAuthProvider()

    // sign in using google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //get name, email and password for login sign up
    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        if (e.target.value < 6) {
            setError('Password must be at least 6 characters');
        } else {
            setPassword(e.target.value);
            setError('')
        }
    }
    // set user name to firebase
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    // sign up with email and password
    const handleRegister = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
        return () => unSubscribe
    }, [])

    // log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }


    // return items
    return {
        user,
        error,
        setError,
        isLoading,
        setIsLoading,
        getName,
        getEmail,
        getPassword,
        setUserName,
        googleSignIn,
        handleRegister,
        handleLogin,
        logOut
    }
}

export default useFirebase;