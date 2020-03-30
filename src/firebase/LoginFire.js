import React  from 'react';
import firebase from './conFirebase';


class Log extends React.Component{
    constructor(props){
super(props);
this.login= this.login.bind(this);

    }
    state={};
    login = e => { 
      
     console.log('email,password');
    };
    login(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
  
          .catch(function (error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              alert('Debe Ingresar su correo electrónico y Contraseña')
              // ...
              console.log(errorCode);
              console.log(errorMessage); 
          });
  
  }

  
  // Recuperación de contraseña
   function () { // para invocar a la funcion de firebase
      let auth = firebase.auth();
      let emailAddress = document.getElementById('email').value; //para recuperar valor email
      console.log("EMAIL:", emailAddress);
      auth.sendPasswordResetEmail(emailAddress)//metodo para recuperacion de correo
          .then(function () { //notificar cuando se envio el correo
              alert('Se ha enviado un correo a tu cuenta. Porfavor sigue las intrucciones')
  
          }, function (error) { // funcion anonima para manejar errores
              console.log(error)
          })
  }
  render(){
    return(
      <div >
<div className="form-group">
            <label> Password</label>
        <input onChange={this.props.login}
         className="form-control" 
         type="password"
          value={this.Email}
          />
        </div><div>
        <button  type="button"
        onClick={this.login}
         className="btn btn-primary">Save</button>
         </div>
      </div>
    )
  }
}
  
    

  export default Log;










