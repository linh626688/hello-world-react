import React, {Component} from "react";
import "./App.css";
import Person from './Person/Person.js';

class App extends Component {
    state = {
        person: [
            {name: 'helix',age : 18},
            {name: 'red',age : 38},
            {name: 'devils',age : 28}
        ],
        other : 'another value'
    }
    switchName = () =>{
        console.log("Was clicked")
        // don't do this this.state.person[0].name = 'name change';
        this.setState({
            person: [
                {name: 'helix edit',age : 18},
                {name: 'red edit',age : 38},
                {name: 'devils edit',age : 28}
            ]
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <p> Having something</p>
                <button onClick={this.switchName}>Switch</button>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
                <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
            </div>
        );
    }
}

export default App;
