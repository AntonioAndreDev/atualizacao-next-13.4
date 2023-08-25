// Caso queira adicionar um favicon na aba da rota em específico, basta adicionar um favicon.ico dentro da rota
// que queremos tal favicon. Nesse caso, poderia add o arquivo favicon.ico dentro dessa pasta about, que é uma rota.

// Adicionando metadados em cada rota/página de forma individual
// O nome precisa ser METADATA para funcionar
export const metadata = {
  title: "Rota: Sobre/About",
  description:
    "Essa é a descição feita por meio de meta dados, da rota Sobre/About",
  openGraph: {
    title: "Rota: Sobre/About para o facebook, instagram e etc",
    description:
      "Essa é a descição feita por meio de meta dados, da rota Sobre/About para o fb, insta e etc",
  },
};

export default function page() {
  return (
    <div>
      <h1 className="mt-10">Essa é a página about.</h1>
      <p>Isso é a rota about da minha aplicação.</p>
    </div>
  );
}
