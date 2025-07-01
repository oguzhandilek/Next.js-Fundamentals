import { StaticImageData } from "next/image"
import pikachu from "@/assets/pikachu.png"
import bulbassur from "@/assets/bulbasaur.png"
import charmander from "@/assets/charmander.png"
import all from "@/assets/all.png"
export type PokemonsImage={
    id:number
    src:StaticImageData
    name:string
}

const pokemonsImages:PokemonsImage[]=[
    {
        id:1,
        name:"pikachu",
        src:pikachu
    },
    {
        id:2,
        name:"bulbasaur",
        src:bulbassur
    },
    {
        id:3,
        name:"charmander",
        src:charmander
    },
    {
        id:4,
        name:"all",
        src:all
    }
]
export default pokemonsImages