// /app/api/favoritos/route.js
import db from "@/lib/db"

// Lista os pokemons favoritados
export async function GET() {
    let [pokemons] = await db.query(
        "SELECT p.* FROM favoritos f JOIN pokemon p ON p.numero = f.numero ORDER BY f.id"
    )
    return Response.json({ pokemon: pokemons })
}

// Favorita um pokemon
export async function POST(request) {
    let { numero } = await request.json()
    await db.query("INSERT IGNORE INTO favoritos (numero) VALUES (?)", [numero])
    return Response.json({ erro: false })
}

// Desfavorita um pokemon
export async function DELETE(request) {
    let { numero } = await request.json()
    await db.query("DELETE FROM favoritos WHERE numero = ?", [numero])
    return Response.json({ erro: false })
}
