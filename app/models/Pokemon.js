import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
export class Pokemon {

    constructor(data) {
        this.name = data.forms.name
        this.nickName = data.nickName || 'no nickname'
        this.img = data.img // REWORK WHEN IT DON'T WORK
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.types.creatorId || 'no creator found'
        this.type = data.types.type
        this.required = data.types.required
        this.ref = data.types.ref
        this.isReady = data.isReady
    }


    get activeTemplate() {
        return `FILL IN LATER`
    }

    get listTemplate() {
        return `<div class="d-flex">
        content content content to come
        <p onclick="app.SandboxPokeController.SetActivePokemon('${this.name}')" class="selectable p-1 rounded mb-1">content content content more to come</p>`
    }
    static PokeListTemplate(poke) {
        return `
    <p class="selectable text-light py-1 rounded mb-0" onclick="app.PokeController.highlightPokemon('${poke.index}')" >${poke.name}</p>
    `
    }

    // static SpellCount
    static PokeCount() {
        let Pokemax = 6
        let readiedPokemon = AppState.myPokemon.filter(spell => spell.isReady)
        if (readiedPokemon.length <= Pokemax) {
            return `<h3 class="text-success">Readied Pokemon ${readiedPokemon.length}/${Pokemax}</h3>`
        } else {
            Pop.toast("Only Six Can Be Active", 'warning', 'center', 5000)
            return `<h3 class="text-danger">Prepared Spells ${readiedPokemon.length}/${Pokemax}</h3>`
        }
    }

    // 'addSpellButton'
    get throwPokeball() {
        return `fill in later`
    }

    //'preparedCheckbox'
    get activeRoster() {
        return `fill in later`
    }
}

