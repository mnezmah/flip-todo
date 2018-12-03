import React, { Component } from 'react';
import { Container, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalNew from './components/ModalNew';
import ModalEdit from './components/ModalEdit';
import ModalProperty from './components/ModalProperty';


class App extends Component {

constructor(props) {

  const date = new Date();
  
  super(props);
  this.getDate = this.getDate.bind(this);
  this.saveModalDetails = this.saveModalDetails.bind(this);
  this.showEditModal = this.showEditModal.bind(this);
  // this.toggleNew = this.toggleNew.bind(this);
  this.state =  {
    required: 0,
    showNew: false,
    showEdit: false,
    showProp: false,
    tasks:  [ {
      id: Date.now(),
      name: 'Zadatak 1',
      desc: 'opis 1',
      created: date.toDateString()
      }, 
      {
        id: Date.now(),
        name: 'Zadatak 2',
        desc: 'opis 2',
        created: date.toDateString()
      },
      {
        id: Date.now(),
        name: 'Zadatak 3',
        desc: 'opis 3',
        created: date.toDateString()
      }  
    ]
  };
}
  getDate() {
    const date = this.state.tasks.created;
    alert(date);
  }

  showModal= () =>  {
    this.setState({
      ...this.state,
      showNew: !this.state.showNew
    });
  }

  showEditModal =  (index) => {
    this.setState({
      ...this.state,
      required: index,
      showEdit: !this.state.showEdit
    })
    this.setState({});
  }

  showPropModal = () =>  {
    this.setState({
      ...this.state, 
      showProp: !this.state.showProp
    });
  }

  saveModalDetails(task) {
    const required = this.state.required;
    let tempTasks = this.state.tasks;
    this.setState({ tasks: tempTasks});
  }

  render() {
    const taskList = this.state.tasks.map ((task, index) => {
      return(
      <tr key={index}>
          <td>{task.id}</td>
          <td>{task.name}</td>
          <td>{task.desc}</td>
          <td>{task.created}</td>
          <td>  <Button className="btn btn-danger" onClick={this.showEditModal}>Uredi </Button></td>
          <td>
          <Button className="btn btn-danger" onClick={this.showPropModal}>Detalji</Button>
          </td>
        </tr>
      )
    });

    return (
      <Container>
        <h1>To do App</h1>
        
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ime Zadatka</th>
            <th scope="col">Opis Zadatka</th>
            <th scope="col">Zapis kreiran</th>
          </tr>
       
        </thead>
        <tbody>
          {taskList}
        </tbody>
        </table>

        <p>{this.state.tasks.id}</p>
        <p>{this.state.tasks.created}</p>
        
        <Button onClick={this.showModal}>Novi Zadatak</Button>
       
        <ModalNew
          taskObj={this.state.tasks}
          onClose={this.showModal}
          showNew={this.state.showNew} 
        />

        <ModalEdit
          taskObj={this.state.tasks}
          onClose={this.showEditModal}
          showEdit={this.state.showEdit}
          saveModalDetails={this.saveModalDetails} 
        />
        
        <ModalProperty 
          taskObj = {this.state.tasks}
          onClose={this.showPropModal}
          showProp={this.state.showProp}
        />
      </Container>
    );
  }
}



export default App;
