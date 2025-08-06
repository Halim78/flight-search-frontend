 export default function FlightCard({ flight }) {
  return (
    <a href={flight.link} target="_blank" rel="noreferrer" className="block bg-white shadow-md rounded-lg p-4 hover:scale-105 transition">
      <h3 className="text-lg font-semibold">{flight.cityFrom} → {flight.cityTo}</h3>
      <p className="text-gray-700">Prix : <strong>{flight.price} €</strong></p>
      <p className="text-sm text-gray-500">Départ : {new Date(flight.departure).toLocaleString()}</p>
      <p className="text-sm text-gray-500">Arrivée : {new Date(flight.arrival).toLocaleString()}</p>
    </a>
  );
}