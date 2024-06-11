import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
    /**
     * permtiria despachar cualquier store
     */
    const dispatch = useDispatch();
    /**
     * obtiene los states del slice establecido en el store
     */
    const { pokemons, isLoading, page } = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch( getPokemons() );
    },[])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr/>
        <span>Loading: {isLoading ? 'True':'False'}</span>

        <ul>
            {pokemons.map(( creature ) => (
                <li key={creature.name}> {creature.name} </li>
            ))}
        </ul>

        <button
            disabled = {isLoading}
            onClick={ () => dispatch( getPokemons(page) ) }
        >
            Next
        </button>
    </>
  )
}
