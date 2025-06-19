import React from "react";

function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  country,
  setCountry,
}) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOptionChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountry = (value) => {
    const sort = [...country].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountry(sort);
  };

  return (
    <section className="w-full max-w-3xl mx-auto my-8 bg-gray-900 rounded-xl px-6 py-6 shadow mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={handleInputChange}
          className="w-full md:flex-1 px-4 py-2 rounded-md bg-slate-800 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="flex gap-2">
            <button
              onClick={() => sortCountry("asc")}
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
            >
              A-Z
            </button>
            <button
              onClick={() => sortCountry("desc")}
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
            >
              Z-A
            </button>
          </div>

          <select
            value={filter}
            onChange={handleOptionChange}
            className="px-4 py-2 bg-slate-800 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
