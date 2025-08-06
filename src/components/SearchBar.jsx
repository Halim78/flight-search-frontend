 import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [fromCities, setFromCities] = useState("MXP,GVA,LYS");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(dateFrom, dateTo, fromCities);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 bg-white shadow p-4 rounded-lg">
      <input
        type="text"
        value={fromCities}
        onChange={(e) => setFromCities(e.target.value)}
        placeholder="Codes aéroports ex: MXP,GVA,LYS"
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Rechercher
      </button>
    </form>
  );
}