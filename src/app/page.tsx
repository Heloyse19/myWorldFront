"use client"
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react"

export default function Home() {
  const [mensagem, setMensagem] = useState("");

  useEffect(()=>{
    const buscarM = async ()=>{
      try{
        const response = await axios.get("http://127.0.0.1:8080/home/api");
        setMensagem(response.data);
      }catch(erro){
        console.error(erro);
        setMensagem("erro ao buscar dados");
      }
    }
    buscarM();
  }, [])

  return (
    <p>{mensagem || "Carregando..."}</p>
  );
}
