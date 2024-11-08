import './App.css';
import List from './Unorder';
import './Unorder.css';
import Header from './Header';
import React, {useContext } from 'react';
import logo from './React-logo.png';
import Context from './Context/Declare';


function App() {
  const {isDark}=useContext(Context);
    return (
     
        <div
            className={isDark ? "dark-mode" : "light-mode"}
            style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '200vh'
            }}
        >
            <Header/>
            <List/>
        </div>
     
    );
}

export default App;
