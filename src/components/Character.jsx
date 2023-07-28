import './character.css';
import { useEffect } from 'react';
import CharacterService from '../services/CharacterService.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        updateCharacterList()
    }, [])

    const updateCharacterList = () => {
        CharacterService.getAllCharacters().then(response => {
            setCharacters(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteCharacter = (id) => {
        CharacterService.deleteCharacter(id).then(() => {
            updateCharacterList();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='characters'>
            <div className='title-characters'>
                <Link to='/create-character' className='btn btn-light'>Create New Character</Link>
            </div>
            
            <div className='cards-container'>
                {
                    characters.map((character) =>
                        <div className="card-test" key={character.id}>
                            <img src={character.img} className="imagen" alt="..." />
                            <div className="text-container">
                                <h5 className="card-title">Name: {character.name}</h5>
                                <p className="card-text description-text">{character.description}</p>
                            </div>
                            <div className='text-container'>
                                <Link to={`/edit-character/${character.id}`} className='btn btn-outline-secondary m-2'>Update</Link>
                                <button className='btn btn-outline-danger m-2' onClick={() => deleteCharacter(character.id)}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
            </div>
        
    )
}

export default Character