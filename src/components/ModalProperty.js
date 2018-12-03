import React from 'react';

export default class ModalPropertry extends React.Component {

  onClose =  (e) =>  {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
      if(!this.props.showProp) {
        return null;
      }
    return(
      <div>
      <div className="detail-task-modal row ">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <h3>Naslov zadatka ovdje</h3>
      
          <p>ID: {this.props.taskObj[0].id}</p>
          <p>Ime Zadatka: {this.props.taskObj[0].name}</p>
          <p>Opis zadatka: {this.props.taskObj[0].desc}</p>
          <p>vrijeme kreiranja: {this.props.taskObj[0].created}</p>
  
            <button className="btn btn-danger">Uredi</button>
            <button className="btn btn-danger">Obriši</button>
            <button className="btn btn-danger">Natrag</button>

        </div>
        <div className="col-md-3"></div>
      </div>
      <div>
        <button onClick={(e) => { this.onClose(e)}}>
            Zatvori
          </button>
      </div>
      </div>
    )
  }

}