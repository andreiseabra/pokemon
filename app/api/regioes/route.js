// /app/api/regioes/route.js
import db from "@/lib/db"

// Lista as regiões
export async function GET() {
    let [regioes] = await db.query("SELECT id, nome FROM regioes ORDER BY id")
    return Response.json({ regioes: regioes })
}
