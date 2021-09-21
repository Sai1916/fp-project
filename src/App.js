import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';

function App() {

  const user=useSelector(selectUser);
  const dispatch = useDispatch();   

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        console.log(userAuth)
          dispatch(
            login({
              uid:userAuth.uid,
              email:userAuth.email,
              img:userAuth.photoUrl
          })
        )
      }
      else{
        // logged out
        dispatch(logout()) 
      }
    })
    return unsubscribe;
  })


  return (
    <div className="app">
      <Router>
        <Switch>
          {!user ? (
            <Route exact path="/">
              <Login />
            </Route>
            ) : (
              <Route path="/home">
                <Home />
              </Route>
            )
          }
        </Switch>
      </Router>

    </div>
  );
}

export default App;
