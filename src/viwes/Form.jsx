import React, { Fragment } from 'react';
import log from './imagen/niña.png';
import '../styles/Form.css';
import firebase from '../firebase/conFirebase';
import Home from '../viwes/Home';


class IniciarSesion extends React.Component {
  constructor() {
    super();
    this.state = {
      estado: true,
      email: '',
      password: ''
    }
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.signInUser = this.signInUser.bind(this);
  }
  // Función que guarda el valor del input Email.
  handleEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email, 'actualizo email')
  }
  // Función que guarda el valor del input Contraseña.
  handlePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password, 'actualizo clave')
  }
  // Función que inicia la sesion del usuario
  signInUser = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ estado: false }) // Si el usuario inicia sesion correctamente cambia el estado.
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
        // ...
      });
  };
  render() {
    if (this.state.estado) {
      return (
        <div className="containerPer">
          <img
            alt="logo"
            src={log}
            className="logoSesion" />
          <h5 className="h5">Bienvenido otra vez</h5>
          <div className="contInput">
            <input type="text" className="input" placeholder="Correo electronico"
              value={this.state.email} onChange={this.handleEmail} />
            <input type="text" className="input" placeholder="Contraseña"
              value={this.state.password} onChange={this.handlePassword} />
          </div>
          <button type="button" className="btn btn-outline-info lg" id="registrar"
            onClick={this.signInUser}>Iniciar mi sesion</button>

        </div>
      )
 }
    return (
      <Fragment>
        {this.state.estado ? null : <Home/>}
      </Fragment>
    )
  }
}
export default IniciarSesion;


















































































































































// import React from'react';
// import '../styles/Form.css';
// import Logs from './imagen/niña.png';

// class Form extends React.Component {
//     state = {};

//     handleClick = e => {
//      console.log('email');
//     };
// handleSubmit = e=>{
//  console.log("boton funciona");
//  console.log(this.state);
// };
//     render() {
//         return(
            
//         <div >
          
//             <div className="container">
//             <div className="col col-lg-6">
//             <h1>Nuevo Usuario</h1>
//         <form  onSubmit={this.handleSubmit}>
//             <div className="form-group">
//             <label> Nombre</label>
//         <input 
//            onChange={this.props.onChange}
//            className="form-control" 
//            type="text"
//            name="firstName"
//            value={this.state.firstName}
//           />
//         </div>

//         <div className="form-group">
//             <label> Apellido </label>
//         <input
//          onChange={this.props.onChange}
//          className="form-control" 
//          type="text"
//           name="lastName"
//           value={this.state.lastName}
//           />
//         </div>
        
//         <div className="form-group">
//             <label> Email</label>
//         <input onChange={this.props.onChange}
//          className="form-control" 
//          type="email"
//           name="Email"
//           value={this.state.Email}
//           />
//         </div>
//         <div className="form-group">
//             <label> Password</label>
//         <input onChange={this.props.login}
//          className="form-control" 
//          type="password"
//           value={this.Email}
//           />
//         </div>
      
//         <button  
//         onClick={this.handleClick}
//          className="btn btn-primary">Save</button>
      
//         </form>
//         </div>
//         <div className="Avatar">
//             <img className="img-fluid Form-ava" 
//             src={Logs}
//             alt="avatar"/>
           
//         </div>
//         </div>
//         </div>
//         );
        
//     }
// }
// export default Form;
