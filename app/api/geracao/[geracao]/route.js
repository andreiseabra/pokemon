// /app/api/geracao/[geracao]/route.js
import db from "@/lib/db"

// Lista os pokemons de uma geração
export async function GET(request, { params }) {
    let { geracao } = await params
    let [pokemons] = await db.query(
        "SELECT * FROM pokemon WHERE geracao = ? ORDER BY numero", [geracao]
    )
    return Response.json({ pokemon: pokemons })
}
