'use client'
import CardPokemon from "@/components/CardPokemon";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";


export default function Home() {
  let [regiao, setRegiao] = useState(1)
  let [regioes, setRegioes] = useState([])

  let [pokemons, setPokemons] = useState([])

  // Favoritos ficam salvos no BD (MySQL)
  let [favoritos, setFavoritos] = useState([])
  let [verFavoritos, setVerFavoritos] = useState(false)

  // Irá gerenciar as nossas rotas
  let router = useRouter()

  // executa uma unica vez durante a amontagem do componente
  useEffect(()=>{
    async function getRegioes(){
      let resposta = await fetch ("/api/regioes")
      let dados = await resposta.json()
      console.log(dados)
      setRegioes(dados.regioes)
    }
    getRegioes()
  },[])

  async function getFavoritos(){
    let resposta = await fetch("/api/favoritos")
    let dados = await resposta.json()
    setFavoritos(dados.pokemon)
  }

  // carrega os favoritos salvos no BD, uma unica vez
  useEffect(()=>{
    getFavoritos()
  },[])

  // chama toda vez que variavel região é alterada
  useEffect(()=>{
    async function getPokemons(){
      let resposta = await fetch (`/api/geracao/${regiao}`)
      let dados = await resposta.json()
      setPokemons(dados.pokemon)
    }
    getPokemons()
  }, [regiao])


  function onRemove(numeroPokemon){
    let pokemonsUpdateList = pokemons.filter( item => item.numero != numeroPokemon)
    
    setPokemons(pokemonsUpdateList)
  }

  async function onFavorite(pokemon){
    let jaFavorito = favoritos.some( item => item.numero == pokemon.numero)

    await fetch("/api/favoritos", {
      method: jaFavorito ? "DELETE" : "POST",
      body: JSON.stringify({ numero: pokemon.numero })
    })
    getFavoritos()
  }

  function onPokemonClicked(id) {
    // Leva para outra rota, semelhante ao Link
    router.push(`/pokemon/${id}`)
  }

// map aplica uma operação ou funcao para todos os elementos de um conjunto 
// SPA - Single Page Application
  return (
    <div >
      <ul className="bg-sky-500 text-white flex gap-4 py-2 px-6">
        {regioes.map((item)=>(
          <li 
            key={'reg_'+item.id}
            className="cursor-pointer capitalize hover:text-red-700 transition-all duration-300"
            onClick={() => { setRegiao(item.id); setVerFavoritos(false) }}
          >
            {item.nome}
          </li>
        ))}
        <li
          className="cursor-pointer hover:text-red-700 transition-all duration-300"
          onClick={() => setVerFavoritos(true)}
        >
          Favoritos
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul>

      <div className="mt-6">
        <h1 className="text-2x1 text-center font-semibold">
          Pokemon
          
        </h1>

        <div className="flex gap-4 flex-wrap">
          {(verFavoritos ? favoritos : pokemons).map((item) => (
            <CardPokemon key={
              'poke_'+item.numero} pokemon={item} onRemove={onRemove} onSelected={onPokemonClicked}
              onFavorite={onFavorite} favorito={favoritos.some( fav => fav.numero == item.numero)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
