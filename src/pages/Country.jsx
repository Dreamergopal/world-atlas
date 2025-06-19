import React, { useEffect, useState, useTransition } from "react";
import Loading from "./Loading";
import { getData } from "../components/api/PostApi";
import Details from "../components/ui/Details";
import SearchFilter from "../components/ui/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const response = await getData();
      setCountry(response.data);
    });
  }, []);

  if (isPending)
    return (
      <h1>
        <Loading />
      </h1>
    );

  const searchCountry = (elem) => {
    if (search) {
      return elem.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const filterRegion = (elem) => {
    return filter === "All" || filter === elem.region;
  };

  const filterCountries = country.filter(
    (data) => searchCountry(data) && filterRegion(data)
  );

  return (
    <section className="bg-gray-950 text-white pt-16 pb-20 px-6">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        country={country}
        setCountry={setCountry}
      />
      <Details data={filterCountries} />
    </section>
  );
}

export default Country;


