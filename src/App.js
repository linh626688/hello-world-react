import React, {Component} from "react";
import "./App.css";
import Person from './Person/Person.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <p> Having something</p>
                <Person name="LOL" age="29"/>
                <Person name="L0000L" age="22"/>
                <Person name="LLLLL" age="26"/>
            </div>
        );
    }
}

export default App;
