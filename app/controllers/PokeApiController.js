import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApiService } from "../services/PokeApiService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawActivePoke() {
    let activePokemon = AppState.pokeList
    if(activePokemon){
        setHTML('active-pokemon', activePokemon.listTemplate)
    }

}

function _drawPokeList() {
    let pokemon = AppState.pokeList
    let listContent = ''
    pokemon.forEach(p => listContent += Pokemon.listTemplate(p))
}

export class PokeApiController {

    constructor() {
        this.getPokemon()
        AppState.on('pokeList', _drawPokeList)
        AppState.on('activePoke', _drawActivePoke)
        AppState.on('user', _drawActivePoke)
        AppState.on('myPokemon', _drawActivePoke)
    }
    async getPokemon() {
        try {
            await pokeApiService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokemon(index){
        try {
            console.log(index);
            await pokeApiService.getOnePokemon(index)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}