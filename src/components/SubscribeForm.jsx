// Usar o use client é necessário pois ele é um componente que roda no lado do cliente
// como esse componente está sendo usado dentro do diretório app, "automaticamente" ao usa-lo dentro de app
// ele vira um componente de servidor, logo para mudar para um componente de cliente é necesspario usar o
// use client
"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setEmail("");
    alert("Email cadastrado com sucesso!");
  };

  return (
    <form className="flex justify-center gap-4 p-4" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu melhor e-mail"
        className="bg-slate-800 p-3 rounded"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <button className="bg-sky-700 p-3 rounded">Se inscrever</button>
    </form>
  );
}
