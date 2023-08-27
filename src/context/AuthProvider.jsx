import { useState, createContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [userAuth, setUserAuth] = useState(null)

    const [userLogin, setUserLogin] = useState({
        mail: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const dataUser = e => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOut = () => signOut(auth)

    

    useEffect(() => {

        setLoading(true)
        onAuthStateChanged(auth, currentUser => {
            setUserAuth(currentUser)
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ userAuth, dataUser, signUp, logIn, logOut, loading, userLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext