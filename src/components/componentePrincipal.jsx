import '../App.css';
import React from 'react';


function ComponentePrincipal({url, title, description}) {

    return (

        <div className = 'container'>
            <div className = 'cnt-img'>
                <img className = 'img' src={url} alt=''></img>
            </div>
            <div className = 'cnt-info'>
                <h2 className = 'cnt-title'>{title}</h2>
                <p className = 'cnt-description'>{description}</p>
            </div>
        </div>
    );
}

export default ComponentePrincipal;