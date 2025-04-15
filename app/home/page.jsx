"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./home.css";
import Card from "../../components/Card";


export default function Home() {
    const [wizards, setwizards] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/wizards')
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