import React from 'react';
import './App.css';


class App extends React.Component {


  constructor(props){
    super(props)
    this.state =  {
      newItem : "",
      list : []
    }
  }

  addItem(todoValue){
    if (todoValue !== "") {
      const newItem = {
        id : Date.now(),
        value : todoValue,
        isDone : false
      };
      const list = [...this.state.list];
      list.push(newItem)
      this.setState({
        list,
        newItem: ""
      });
    }
  }

deleteItem(id){
  const list = [...this.state.list];
  const updatelist = list.filter(item => item.id !== id);
  this.setState({list: updatelist})
}

updateInput(input){
  this.setState({newItem:input})
}

  render(){
    return (
      <div className='App-header'>
        <div className='main-logo'>
          <h1>React Todo List</h1>
          <h3>Add an item</h3>
          <input 
          type='text' 
          className='input' 
          placeholder='Add item'
          value={this.state.newItem}
          onChange={ e => this.updateInput(e.target.value)}
          />
          <button type='submit' className='btn1'
          onClick= {() => this.addItem(this.state.newItem)}
          disabled = {!this.state.newItem.length}
          >Add Item</button>
          <ul className='ul'>
            {this.state.list.map(item => {
              return(
                <li key = {item.id}>
                  <input 
                  type= "checkbox"
                  name = "idDone"
                  checked = {item.isDone}
                  onChange = {() => {}}/>
                  {item.value}
                  <button className= 'btn' 
                  onClick = {() => this.deleteItem(item.id)}>
                    delete
                  </button>
                </li>
              )
            })}
            <li className='li'>
          <input type='checkbox' name='' id='input' /> 
          this is
          <button className='btn' >Delete</button>
            </li>
          </ul>
        </div>
      </div>
    );
   }
}



export default App;
 