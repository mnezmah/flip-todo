import React from 'react';
import { Button } from 'reactstrap';

export default class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      name: '', 
      desc: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name, 
      desc: nextProps.desc
    });
  }

  nameHandler(e) {
    this.setState({ name: e.target.value});
  }

  descHandler(e) {
    this.setState({desc: e.target.value });
  }

  handleSave() {
    const task = this.state;
    this.props.saveModalDetails(task)
  }


  onClose = (e) => {
    this.props.onClose &&
    this.props.onClose(e);  
  }

  render() {
    if(!this.props.showEdit)  {
      return null;
    }
    return (

      <section className="edit-task-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Uredi zadatak</h3>
              <Button className="close"></Button>
            </div>
          <div className="modal-body">
            <p><span className="modal-label">Id:</span>
            {this.props.taskObj[0].id}</p>

            <p>
              <span className="modal-label">Ime Zadatka:</span>
              <input value={this.props.taskObj[0].name} onChange={(e) => this.nameHandler(e)}/>
            </p>
            <p>
              <span className="modal-label">Opis Zadatka:</span>
              <textarea value={this.state.desc} onChange={(e) => this.descHandler(e)}/>
            </p>
          </div>
                      
            
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={(e) => { this.onClose(e)}}>
            Odbaci
          </button>
          <button className="btn btn-primary" onClick={() => {this.handleSave() }}>Spremi promjene</button>
          </div>
        </div>
        </div>
      </section>
     
    );
  }
}

