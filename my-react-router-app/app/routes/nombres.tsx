import type { Route } from "./+types/nombres";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nombres 1-10" },
    { name: "description", content: "Affichage des nombres de 1 à 10" },
  ];
}

export default function Nombres() {
  const nombres = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nombres de 1 à 10</h1>
      <ul className="space-y-2">
        {nombres.map((nombre) => (
          <li key={nombre} className="text-xl">
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

