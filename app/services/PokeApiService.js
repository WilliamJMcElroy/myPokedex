import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";

// @ts-ignore
const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})


class PokeApiService {

    // async getSpells()
    async getPokemon() {
        const res = await pokeapi.get('pokemon')
        console.log('GOT SPELLS', res.data);
        AppState.pokeList = res.data.results
        // console.log(AppState.spellList)
    }

    //     async getOneSpell(index) 
    async getOnePokemon(index) {
        console.log(index);
        const res = await pokeapi.get(`pokemon/${index}`)
        console.log('getOnePokemon', res.data);
        // NOTE when classing a single item, you need to pass into the model the level where the 'data' starts.
        AppState.activePoke = new Pokemon(res.data)
    }

}


export const pokeApiService = new PokeApiService()