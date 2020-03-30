import React from'react';
import '../styles/Form.css';
import Logs from './imagen/niña.png';
<<<<<<< HEAD
import Fire from '../firebase/LoginFire';

class Form extends React.Component {
    state = {};
=======
>>>>>>> bc7138277698a64687140afd7a40596142598446

    handleClick = e => {
     console.log('email');
    };
handleSubmit = e=>{
 console.log("boton funciona");
 console.log(this.state);
};
    render() {
        return(
            
        <div >
          
            <div className="container">
            <div className="col col-lg-6">
            <h1>Nuevo Usuario</h1>
        <form  onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label> Nombre</label>
        <input 
           onChange={this.props.onChange}
           className="form-control" 
           type="text"
           name="firstName"
           value={this.state.firstName}
          />
        </div>

        <div className="form-group">
            <label> Apellido </label>
        <input
         onChange={this.props.onChange}
         className="form-control" 
         type="text"
          name="lastName"
          value={this.state.lastName}
          />
        </div>
        
        <div className="form-group">
            <label> Email</label>
        <input onChange={this.props.onChange}
         className="form-control" 
         type="email"
          name="Email"
          value={this.state.Email}
          />
        </div>
        <Fire>
        <button  
        onClick={this.handleClick}
         className="btn btn-primary">Save</button>
        </Fire>
        </form>
        </div>
        <div className="Avatar">
            <img className="img-fluid Form-ava" 
            src={Logs}
            alt="avatar"/>
<<<<<<< HEAD
           
=======

>>>>>>> bc7138277698a64687140afd7a40596142598446
        </div>
        </div>
        </div>
        );
        
    }
}
export default Form;
