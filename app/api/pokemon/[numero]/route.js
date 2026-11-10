// /app/api/pokemon/[numero]/route.js
import db from "@/lib/db"

// Busca um pokemon pelo número
export async function GET(request, { params }) {
    let { numero } = await params
    let [pokemons] = await db.query("SELECT * FROM pokemon WHERE numero = ?", [numero])
    return Response.json({ pokemon: pokemons[0] })
}
