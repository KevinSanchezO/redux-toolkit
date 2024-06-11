import { pokemonApi } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

/**
 * Los thunks son acciones asincronas que disparan otras acciones despues de resolver la asincrona
 */

export const getPokemons = ( page = 0 ) => {
    /** 
     * dispatch: para hacer dispatch de otra accion
     * getState: permite obtener todo el rootState
     * */ 
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}