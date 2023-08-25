"use client";

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function NotFound() {
  const router = useRouter();
  const error = router.query?.error;

  // const error = NextResponse.json({ error: "500 error" }, { status: 500 });

  if (error) {
    switch (error.status) {
      case 404:
        return <h2>O produto não foi encontrado.</h2>;
      case 401:
        return <h2>Página não autorizada para acesso.</h2>;
      case 400:
        return <h2>Algo deu errado ao carregar o produto.</h2>;
      case 500:
        return <h2>Houve algum erro interno no servidor.</h2>;
      case 502:
        return <h2>Houve uma resposta inválida de nosso servidor.</h2>;
      case 503:
        return <h2>Estamos em manutenção.</h2>;
    }
  }

  return <h2>Houve algum erro genérico</h2>;
}
