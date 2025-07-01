import { NextRequest } from "next/server";
import { users } from "../data";

export async function GET(request:NextRequest) {
    const searchParams=request.nextUrl.searchParams
    const query=searchParams.get("query")
    const filterUsers=query ? (users.filter((user)=>user.name.includes(query))): users
    return Response.json(filterUsers)
}
export async function POST(request:Request) {
    const user=await request.json()
    const newUser={
        id:users.length+1,
        name:user.name,
        email:user.email,
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers:{"Content-Type":"application/json"},
        status:201
    })
}