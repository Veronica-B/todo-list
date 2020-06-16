import React from 'react';
import './App.css';
import List from "./components/list"

class App extends React.Component{
  //array of items
  //property that holds an empty string, value
  //state setstate??
  //list out  these items
  //on sumbit
  //on change
  //bind

  constructor(props){
    super(props)
    this.state={
      term:"",
      items:[]
    }
  }

  onChange= (event) => {
    this.setState({term: event.target.value})
  }

  onSubmit= (event) =>{
    event.preventDefault();
    this.setState({
    term:'',
    items:[...this.state.items, this.state.term]
    })
  }
  render() {
  return(
    <div>
    <div className="header">
      <div className="wrapper">
        <img src="" alt="" />
        <p className="title">Today's to-do list</p>
      </div>
      </div>
      <div className="app">
        <div className="app-wrapper">
          <p className="app-title">My List</p>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} placeholder="Type here to add a task" type="text" id="box" />

          </form>
          <br />

          < List className = "items" items={this.state.items} />

        </div>
      </div>
    </div>
  ); 
}
}

export default App;
