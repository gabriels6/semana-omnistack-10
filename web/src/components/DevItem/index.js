import React from 'react';
import './styles.css';
import api from '../../services/api';

function DevItem({dev}){

  async function DeleteItem(e){
     const response = await api.delete(`delete/${e.target.id}`);

  }

  

    return(
        <li className = "dev-item">
              <header>
                <img src = {dev.avatar_url} alt = {dev.name}></img>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
                <button id = {dev.github_Username} onClick = {DeleteItem}>X</button>
              </header>
              <p>{dev.bio}</p>
              <a href = {`http://github.com/${dev.github_Username}`}>Acessar perfil no GitHub</a>
            </li>
    );
}

export default DevItem;