import React  from 'react';
import firebase from './firebaseConfig';
import Form from '../viwes/Form';

class Log extends React.Component{
    constructor(props){
super(props);
this.login= this.login.bind(this);

    }
    login(){
        
   let provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().singnInWithPopup(provider).then(resul=>{
     console.log(resul)
   })
  }
  render(){
    return(
      <div>
<Form/>
      </div>
    )
  }
}
export default Log;