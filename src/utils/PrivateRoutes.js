import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";


const PrivateRoutes = () => {
    const userState = useSelector((st) => st.user);
    
    return(
        userState.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes




