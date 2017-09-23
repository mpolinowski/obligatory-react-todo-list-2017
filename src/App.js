import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts/font-awesome.css';

var todos = [
  {
    todoTitle: 'Do some coding',
    todoResponsible: 'Mike Polinowski',
    todoDescription: 'His values - and his record - affirm what is best in us. And it`s a lesson we need to remember today - as members of another Joshua generation.',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'Drink Coffee',
    todoResponsible: 'Mike Polinowski',
    todoDescription: 'And when these battles were overtaken by others and when the wars they opposed were waged and won, these faithful foot soldiers for justice kept marching. Like other black churches, Trinity`s services are full of raucous laughter and sometimes bawdy humor.',
    todoPriority: 'high'
  },
  {
    todoTitle: 'Do some more coding',
    todoResponsible: 'Mike Polinowski',
    todoDescription: 'And slowly, I came to realize that something was missing as well - that without an anchor for my beliefs, without a commitment to a particular community of faith, at some level I would always remain apart, and alone. At every opportunity, they`ve told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design.',
    todoPriority: 'low'
  },
  {
    todoTitle: 'Do the dish washing',
    todoResponsible: 'someone else',
    todoDescription: 'Like you, I used to think the world was this great place where everybody lived by the same standards I did, then some kid with a nail showed me I was living in his world, a world where chaos rules not order, a world where righteousness is not rewarded. That`s Cesar`s world, and if you`re not willing to play by his rules, then you`re gonna have to pay the price.',
    todoPriority: 'low'
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="container">

          <nav className="navbar sticky-top navbar-dark bg-dark">
            <img src={logo} className="App-logo" alt="logo" />
            <h4 className="navbar-brand">
              Todo Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
            </h4>
          </nav>

          <div className="row">
            <div className="col">
              <ul className="list-group">
                { this.state.todos.map((todo, index) =>
                    <li className="list-group-item" key={index}>
                      <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="badge badge-secondary">{todo.todoPriority}</span></small></h4>
                      <p><i className="fa fa-user-circle-o" aria-hidden="true"></i> {todo.todoResponsible}</p>
                      <p className="text-justify">{todo.todoDescription}</p>
                      <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Delete</button>
                    </li>
                )}
              </ul>
            </div>
        </div>
      </div>
    );
  }

 }

export default App;
