import { useState, useEffect } from "react"
import CharacterService from "../services/CharacterService";
import { Link, useNavigate, useParams } from "react-router-dom";
import './createCharacter.css';

const CreateCharacter = () => {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateCharacter = (e) => {
        e.preventDefault();
        const character = { name, img, description };

        if (id) {
            CharacterService.updateCharacter(id, character).then((response) => {
                console.log(response.data)
                navigate('/characters')
            }).catch(error => {
                console.log(error)
            })
        } else {
            CharacterService.createCharacter(character).then((response) => {
                console.log(response.data)
                navigate('/characters')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        CharacterService.getCharacterById(id).then((response) => {
            setName(response.data.name)
            setImg(response.data.img)
            setDescription(response.data.description)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {
        if (id) {
            return <h2>Update Character</h2>
        } else {
            return <h2>Create New Character</h2>
        }
    }

    return (
        <div className="create-update-form">
            <div className="text-center">{title()}</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        placeholder="Write character name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Image</label>
                    <input
                        type="text"
                        placeholder="Write character url image"
                        name="img"
                        className="form-control"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        placeholder="Write character description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveOrUpdateCharacter(e)}>Save</button>
                    <Link to='/characters' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateCharacter