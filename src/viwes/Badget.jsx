import React from 'react';
import '../styles/Badget.css';
import confLogo from './imagen/log.jpeg';
 
class Badges extends React.Component{
    render() {
    return (
    <div className="Badge">
        <div className="Badge__header">
            <img src={confLogo} alt="Logo de la imagen"/>
            </div>         
            <div className="Badges__section-name">
                <h1>
                    Bienvenidos 
                </h1>
                <img 
                 className="Badge__avatar"
                 src={this.props.avatarUrl} 
                 alt="avatar"
                 />
            </div>
            </div>
    ); 
 }   
}
export default Badges; 