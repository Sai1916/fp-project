import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { auth,provider } from '../firebase';
import {login, logout, selectUser} from '../features/userSlice'

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName=useSelector(selectUser);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user)
        setUser(user);
        history.push("/home");
      }
    });
  });

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
            dispatch(logout());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
        login({
            uid:user.uid,
            email:user.email,
            img:user.photoUrl
        })
    )
  };
    return (
        <div className="login">
            Login to upload and view the data.
            <Button variant="contained" color="sucess" onClick={handleAuth}>Login</Button>
        </div>
    )
}

export default Login
