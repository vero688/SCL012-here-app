import React, { Fragment } from 'react'
import '../Css/login.css'
import LoginEmail from '../viwes/Init';
import InicioSesion from '../viwes/Form';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isNavbar: true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // Función que cambia el estado del componente a falso
  handleToggleClick() {
    this.setState(({ isActive: true }));
    console.log(this.state.isActive, 'mi estado')
  }
  handleClick() {
    this.setState({ isNavbar: false })
    console.log(this.state.isNavbar, 'mi estado navbar')
  }
  render() {
    // Si el estado es true me muestra Login
    if (!this.state.isActive === this.state.isNavbar) {
      return (
        <Fragment>
          <div className="containe">
            {/* <img
              src="https://github.com/kaarenzu/Here-Squad2/blob/master/src/Imagenes/logo.png?raw=true"
              className="logo" /> */}
            <h5>Planifica tus viajes, siéntete seguro Move Calm te acompaña </h5>
            {/* Con este boton cambio el estado a falso */}
            <button type="button" onClick={this.handleToggleClick}
              className="btn btn-outline-info lg"
              id="crearCuenta">{this.state.isActive ? 'Crear una cuenta' : 'Crear cuenta'}
            </button>
            <button type="button" className="btn btn-outline-info lg"
              onClick={this.handleClick} id="iniciarSesion">{this.state.isNavbar ? 'Iniciar Sesión' : 'false'}
            </button>
          </div>
        </Fragment>
      )
    }
    return(
      <Fragment>
        {this.state.isActive ? <LoginEmail /> : <InicioSesion />}
      </Fragment>
    )
  }
}
export default LoginView;









































































// import React  from 'react';
// import firebase from './conFirebase';
// import Form from '../viwes/Form';

// class Log extends React.Component{
//     constructor(props){
// super(props);
// this.login= this.login.bind(this);

//     }
//     state={};
//     login = e => { 
      
//      console.log('email,password');
//     };
//     login(email, password) {
//       firebase.auth().signInWithEmailAndPassword(email, password)
  
//           .catch(function (error) {
//               // Handle Errors here.
//               let errorCode = error.code;
//               let errorMessage = error.message;
//               alert('Debe Ingresar su correo electrónico y Contraseña')
//               // ...
//               console.log(errorCode);
//               console.log(errorMessage); 
//           });
  
//   }

  
//   // Recuperación de contraseña
//    function () { // para invocar a la funcion de firebase
//       let auth = firebase.auth();
//       let emailAddress = document.getElementById('email').value; //para recuperar valor email
//       console.log("EMAIL:", emailAddress);
//       auth.sendPasswordResetEmail(emailAddress)//metodo para recuperacion de correo
//           .then(function () { //notificar cuando se envio el correo
//               alert('Se ha enviado un correo a tu cuenta. Porfavor sigue las intrucciones')
  
//           }, function (error) { // funcion anonima para manejar errores
//               console.log(error)
//           })
//   }
//   render(){
//     return(
//       <div >
//         <Form>
//          </Form>
//      </div>
//     )
//   }
// }
  
    

//   export default Log;










