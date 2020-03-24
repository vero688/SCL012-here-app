import React from 'react';
import '../styles/Home.css';
import confLogo from './imagen/LOGO.png';
import Log  from './imagen/LOGO.png'
 
class Badges extends React.Component{
    render() {
    return ( 
    <div className="Badge">
    <div className="Badge__header">
    <img className="PostAv" src={confLogo} alt="Logo de la imagen"/>
        </div>         
        <div className="Badges__section-name">
                <img 
                className="Badge__avatar"
                src={Log} 
                alt ="avatar" 
                />
                <div className="Badge__section-info">
            <h1>Peludos Lugares
                </h1></div>
  
                <div>
                   <a className="Badge__footer" href="/">
                   <span >¿Vamos a dar un paseo?</span>
                        </a> 
                </div>
                </div>
                </div>
    
    ); 
 }   
}
export default Badges; 




