"use client"
import { useParams } from "next/navigation"

export default function ProductPage(){
    const {id} = useParams();
    
    return <div>
        <h1>Single product {id}</h1>
    </div>
}