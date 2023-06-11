import './App.css';
import React from "react";
import './style.css'
import GithubProfileSearch from "./Github/GithubProfileSearch";
class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={

        }

    }
    render() {
        return(
            <div>
                <nav className='navbar  '>
                    <h4>React with Github Search app</h4>
                </nav>
             <GithubProfileSearch/>
            </div>
        )
    }
}
export default App;
