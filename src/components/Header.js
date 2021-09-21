import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { auth } from '../firebase';
import { logout, selectUser} from '../features/userSlice'

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user=useSelector(selectUser);
    
    const handleSignout = () => {
        auth
        .signOut()
        .then(() => {
            dispatch(logout());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }

    return (
        <div className="header">
            <p className="header_logo">FP-Project</p>
            {/* {login ?  */}
            <Avatar className="header_avatar" src={user.photoUrl} onclick={handleSignout}/> 
            {/* : 
            <div className="header_login_btn">
                <Button variant="contained" color="sucess">Login</Button>
            </div> */}
            {/* }         */}
        </div>
    )
}

export default Header
