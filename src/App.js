import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'sdftgs', name: 'Max', age: 28 },
      { id: 'jbfhnd', name: 'Manu', age: 29 },
      { id: 'puvrhv', name: 'Stephanie', age: 26 }
    ],
    username: 'supermax',
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }; //this is in-line styling. See Person.css for global styling

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Person</StyledButton> */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Person</button>

        {persons}

        

        {/* <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" /> */}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
