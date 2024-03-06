import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import { auth, Providers } from '../config/firebase'

interface props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: props) => {
    const isSignedIn = localStorage.getItem("isSignedIn")
    const navigate = useNavigate();
    // this will just check if the use is logged in, if so. it returns the child
    // (which are passed as props - its just whatever compnent is either protected
    // or not)
    // otherwise it sends them to the login route
    useEffect(() => {
        if(!isSignedIn) {
            navigate("../")
        }
    }, [])
  return (
    <>{children}</>
  )
}

export default AuthChecker
