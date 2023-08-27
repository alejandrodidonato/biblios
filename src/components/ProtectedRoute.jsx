import useAuth from '../hooks/useAuth'
import {Navigate} from 'react-router-dom'
import Loading from './Loading'

export function ProtectedRoute({ children }) {

    const { userAuth, loading } = useAuth()

    if(loading) return <Loading/>

    if(!userAuth) return <Navigate to="/login" />

    return <>{children}</>

}