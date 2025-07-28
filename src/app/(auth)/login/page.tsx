'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function loginPage(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setErro('');

        try{
            const response = await fetch('http://localhost:8080/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, senha})
            });

            if(!response.ok){
                throw new Error("Credenciais inválidas!");
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            router.push('/');

        } catch(error){
            setErro(error instanceof Error ? error.message : "Ocorreu um erro desconhecido");
        }
    }
    return(<p></p>);
}