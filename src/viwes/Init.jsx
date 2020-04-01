












// import React, { Fragment } from 'react'
// import '../Css/login.css'
// import LoginEmail from '../viwes/Init';
// import InicioSesion from '../viwes/Form';

// class LoginView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: false,
//       isNavbar: true
//     }
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   // Función que cambia el estado del componente a falso
//   handleToggleClick() {
//     this.setState(({ isActive: true }));
//     console.log(this.state.isActive, 'mi estado')
//   }
//   handleClick() {
//     this.setState({ isNavbar: false })
//     console.log(this.state.isNavbar, 'mi estado navbar')
//   }
//   render() {
//     // Si el estado es true me muestra Login
//     if (!this.state.isActive === this.state.isNavbar) {
//       return (
//         <Fragment>
//           <div className="containe">
//             {/* <img
//               src="https://github.com/kaarenzu/Here-Squad2/blob/master/src/Imagenes/logo.png?raw=true"
//               className="logo" /> */}
//             <h5>Planifica tus viajes, siéntete seguro Move Calm te acompaña </h5>
//             {/* Con este boton cambio el estado a falso */}
//             <button type="button" onClick={this.handleToggleClick}
//               className="btn btn-outline-info lg"
//               id="crearCuenta">{this.state.isActive ? 'Crear una cuenta' : 'Crear cuenta'}
//             </button>
//             <button type="button" className="btn btn-outline-info lg"
//               onClick={this.handleClick} id="iniciarSesion">{this.state.isNavbar ? 'Iniciar Sesión' : 'false'}
//             </button>
//           </div>
//         </Fragment>
//       )
//     }
//     return(
//       <Fragment>
//         {this.state.isActive ? <LoginEmail /> : <InicioSesion />}
//       </Fragment>
//     )
//   }
// }
// export default LoginView;








































// import React, {Fragment} from 'react';
// import logo from '../Imagenes/logo.png';
// import '../styles/Init.css';
// import firebase from '../firebase/conFirebase';
// import IniciarSesion from '../viwes/Form';


// class LoginEmail extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       estado: true,
//       name: '',
//       email: '',
//       password: ''
//       // al estado le colocamos que es verdadero con sus parametros 
//     }

//     this.handleNam = this.handleNam.bind(this);
//     this.handleEmail = this.handleEmail.bind(this);
//     this.handlePassword = this.handlePassword.bind(this);
//     this.singUpNewUser = this.singUpNewUser.bind(this);
//   }
//   // los eventos de cada metodo se dara aca, para indicarle que debe buscar cada evento 
//   handleNam(event) {
//     this.setState({ name: event.target.value });
//     console.log(this.state.name, 'nombre de usuario')
//   }
//   handleEmail(event) {
//     this.setState({ email: event.target.value });
//     console.log(this.state.email, 'email de usuario')
//   }
//   handlePassword(event) {
//     this.setState({ password: event.target.value });
//     console.log(this.state.password, 'muestro clave')
//   }
//   //nuevo usuario para la app//
//   singUpNewUser = (email, password, name) => {

//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//      //firebase crea el nuevo usuario con email y password 
//       .then(() => {
//         this.setState({ estado:false });
// // 
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         if (errorCode === 'auth/weak-password') {
//           alert('error?.');
//         } else {
//           alert(errorMessage);
//         }
//         console.log(errorCode);
//         console.log(errorMessage);
       
//       });
//   };
//   render() {
//       //le colocamos una condicion para que si el estado de es true muestre el evento del metodo 
//     if(this.state.estado){
//       return (
//         <div className="containerPer">
//           <img
//             alt="logo"
//             src={logo}
//             className="logoEmail" />
//             <h5 className="h5">Crear Cuenta</h5>
//           <div className="contInput">
//             <input 
//             type="text" 
//             className="input"
//              placeholder="Nombre"
//              //este es el metodo que le daremos el evento, que efectue la comdicion
//               value={this.state.name} 
//               onChange={this.handleNam} />
//             <input 
//             type="text"
//              className="input" 
//              placeholder="Email"
//               value={this.state.email} 
//               onChange={this.handleEmail} />
//             <input 
//             type="text" 
//             className="input" 
//             placeholder="Contraseña"
//               value={this.state.password}
//                onChange={this.handlePassword} />
//           </div>
//             <button 
//             type="submit" 
//             className="btn btn-outline-info lg"
//              id="registrar" 
//               onClick={this.singUpNewUser}>
//                   Registrarme
//             </button>
//         </div>
//       )
//     }
//     return (
//       <Fragment>
//         {this.state.estado?null:<IniciarSesion/>}
//       </Fragment>
//     )
//   }
// }

// export default LoginEmail;