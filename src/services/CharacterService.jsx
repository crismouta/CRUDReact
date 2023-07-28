import axios from "axios";

const CHARACTER_BASE_REST_API_URL = "http://localhost:8080/characters";

class CharacterService {
    getAllCharacters() {
        return axios.get(CHARACTER_BASE_REST_API_URL);
    }
    createCharacter(character) {
        return axios.post(CHARACTER_BASE_REST_API_URL, character)
    }

    deleteCharacter(id) {
        return axios.delete(CHARACTER_BASE_REST_API_URL + '/' + id)
    }

    getCharacterById(id) {
        return axios.get(CHARACTER_BASE_REST_API_URL + '/' + id)
    }

    updateCharacter(id, character) {
        return axios.put(CHARACTER_BASE_REST_API_URL + '/' + id, character)
    }
}
export default new CharacterService();