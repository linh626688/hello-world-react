import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
    state = {
        person: [
            {name: 'helix', age: 18},
            {name: 'red', age: 38},
            {name: 'devils', age: 28}
        ],
        other: 'another value',
        showPerson: false
    }

    switchName = (newName) => {
        console.log("Was clicked")
        // don't do this this.state.person[0].name = 'name change';
        this.setState({
            person: [
                {name: newName, age: 18},
                {name: 'red edit', age: 38},
                {name: 'devils edit', age: 28}
            ]
        })
    }
    nameChangeHandler = (event) => {
        this.setState({
            person: [
                {name: 'helixx', age: 18},
                {name: event.target.value, age: 38},
                {name: 'devils edit', age: 28}
            ]
        })
    }
    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (

            <div className="App">
                <h1>Hello world</h1>
                <p> Having something</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle
                </button>
                {
                    this.state.showPerson === true ?
                        <div>
                            <Person
                                name={this.state.person[0].name}
                                age={this.state.person[0].age}/>
                            <Person
                                click={this.switchName.bind(this, 'new Name edit')}
                                name={this.state.person[1].name}
                                age={this.state.person[1].age}
                                changed={this.nameChangeHandler}
                            > My hobbie is driving</Person>
                            <Person
                                name={this.state.person[2].name}
                                age={this.state.person[2].age}/>
                        </div> : null
                }

            </div>
        );
    }
}

export default App;
