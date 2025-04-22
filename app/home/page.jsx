"use client"

require("dotenv").config();

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./home.css";
import Card from "../../components/Card";


export default function Home() {
    const [wizards, setwizards] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3030/api/wizards',{
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                }
            })
            .then((response) => {
                setwizards(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar Casas:", error)
            })
        
    }, []);

    return (
        <div className="container">
            <div className="grid">
                            {wizards.map((char) =>(
                    <Card key={char.id} wizard={char}/>
                ))}
            </div>
        </div>
    )
}