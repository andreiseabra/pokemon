// components/FUllPokemon.jsx
'use client'
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function FUllPokemon({ numero }) {
    let [pokemon, setPokemon] = useState(null)

    // executa uma unica vez durante a montagem do componente
    useEffect(()=>{
        async function getPokemon(){
            let resposta = await fetch(`https://pokemon.danielpimentel.com.br/v1/pokemon/numero/${numero}`)
            let dados = await resposta.json()
            setPokemon(dados.pokemon)
        }
        getPokemon()
    }, [numero])

    if (!pokemon) {
        return <div className="p-6">Carregando...</div>
    }

    return (
        <div className="p-6 flex flex-wrap justify-center gap-10">
            <div>
                <img className="whidth h-60 mx-auto" src={pokemon.img} />
                <div className="flex justify-center gap-4 mt-2">
                    <img className="h-20" src={pokemon.img_3d} />
                    <img className="h-20" src={pokemon.img_shiny} />
                </div>
            </div>

            <div className="text-sm">
                <h2 className="capitalize font-semibold text-xl">
                    #{pokemon.numero} {pokemon.nome}
                </h2>

                <ul className="mt-3 flex flex-col gap-1">
                    <li>Tipo: <span className="font-semibold capitalize">{pokemon.tipo.replaceAll(',', ', ')}</span></li>
                    <li>Geração: <span className="font-semibold">{pokemon.geracao}</span></li>
                    <li>Altura: <span className="font-semibold">{pokemon.altura}cm</span></li>
                    <li>Peso: <span className="font-semibold">{pokemon.peso}kg</span></li>
                    <li>HP: <span className="font-semibold">{pokemon.hp}</span></li>
                    <li>Ataque: <span className="font-semibold">{pokemon.atk}</span></li>
                    <li>Defesa: <span className="font-semibold">{pokemon.def}</span></li>
                    <li>Velocidade: <span className="font-semibold">{pokemon.speed}</span></li>
                    <li>Atq. Esp.: <span className="font-semibold">{pokemon.spatk}</span></li>
                    <li>Def. Esp.: <span className="font-semibold">{pokemon.spdef}</span></li>
                    <li>Evoluções: <span className="font-semibold capitalize">{pokemon.evolucoes.replaceAll(',', ', ')}</span></li>
                </ul>

                <Link
                    href="/"
                    className="inline-block text xl bg-red-600 text-white py-1 px-2 rounded-2xl mt-4 cursor-pointer"
                >
                    Voltar
                </Link>
            </div>
        </div>
    )
}
