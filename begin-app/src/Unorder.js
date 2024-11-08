import React,{useContext} from 'react';
import Context from "./Context/Declare"

function List() {
    const {isDark}=useContext(Context);
    return (
        <div className={isDark?"list-container-dark":"list-container-light"}>
            <div>
                <h1>Fun Facts about React</h1>
            </div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export default List;
