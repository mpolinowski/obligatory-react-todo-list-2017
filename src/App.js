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
    todoPriority: 'lowest'
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
  this.setState({todos: [...this.state.todos, todo]});
}

  render() {
    return (
      <div className="container">

        <nav className="navbar fixed-top navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="navbar-brand">
            Todo Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h1>
        </nav>

          <div className="row mt-5">
            <br/>
            <TodoInput onAddTodo={this.handleAddTodo}/>
            <hr/>
          </div>

          <div className="row mt-5">
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
            {/* col */}
        </div>
        {/* row */}
      </div>
    );
  }

 }

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'lowest'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

   handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'lowest'
    });
  }

  render() {
    return (
      <div className="col">
        <br/><br/><br/>
        <h4>Add New Todo</h4><br/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input  name="todoTitle"
                    type="text"
                    className="form-control"
                    id="inputTodoTitle"
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                    aria-describedby="Todo Title"
                    placeholder="Enter Title"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="control-label text-muted"><small>Priority</small></label>
              <select   name="todoPriority"
                        type="text"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Priority">
                <option>lowest</option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                <option>emergency</option>
              </select><br/>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDescription" className="control-label text-muted"><small>Description</small></label>
              <textarea   name="todoDescription"
                          type="text"
                          className="form-control"
                          id="inputTodoDescription"
                          value={this.state.todoDescription}
                          onChange={this.handleInputChange}
                          aria-describedby="Todo Description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoResponsible" className="control-label text-muted"><small>Responsible</small></label>
              <select   name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.todoResponsible}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Responsible">
                <option>someone else</option>
                <option>Mike Polinowski</option>
                <option>Micro Aggressions</option>
                <option>Vladimir Putin</option>
                <option>Climate Change</option>
              </select><br/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">Add Todo</button>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
