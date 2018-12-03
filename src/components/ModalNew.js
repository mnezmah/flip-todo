import React from 'react';

export default class Modal extends React.Component {

  onClose = (e) =>  {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.showNew) {
      return null;
    }
    return(
      <div>
        {this.props.childern}
        <div>
           <section className="new-task-modal row">
               <div className="col-md-6">
                 <h3>Kreiraj novi zadatak</h3>
                 <form action="" method="">
                   <div className="form-group">
                     <p>id: {Date.now()}</p>
                   </div>
          
                   <div className="form-group">
                     <label htmlFor="new-task-name">Ime zadatka</label>
                     <input type="text" id="new-task-name" />
                   </div>
          
                   <div className="form-group">
                     <label htmlFor="new-task-desc">Opis zadatka</label>
                     <textarea rows="8" id="new-task-desc"></textarea>
                   </div>
          
                     <p>vrijeme kreiranja: {this.props.taskObj.created}</p>
          
                     <button className="btn btn-danger">Spremi</button>
          
                   </form>
                 </div>
              </section>
           </div>
        <div>
          <button onClick={(e) => { this.onClose(e)}}>
            close
          </button>
        </div>
      </div>
    );
  }
}