import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryData } from "../api/PostApi";
import Loading from "../../pages/Loading";

function DeatialCard() {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();
  const params = useParams();

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData(params.id);
      if (response.status === 200) {
        setCountryData(response.data[0]);
      }
    });
  }, [params]);

  if (isPending || !countryData) return <Loading />;

  return (
    <section className="pt-28 min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div className="w-full space-y-4">
            <img
              src={countryData.flags.svg}
              alt={countryData.name.common}
              className="w-full max-h-[350px] object-cover rounded-xl shadow-lg border border-white/10"
            />
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Fact:</span>{" "}
              {countryData.flags.alt || "No description available."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-md mx-20">
            {[
              { label: "Name", value: countryData.name.common },
              { label: "Official Name", value: countryData.name.official },
              {
                label: "Native Name",
                value: Object.values(countryData.name.nativeName)
                  .map((n) => n.common)
                  .join(", "),
              },
              {
                label: "Currency",
                value: Object.values(countryData.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(", "),
              },
              { label: "Capital", value: countryData.capital },
              { label: "Region", value: countryData.region },
              { label: "Subregion", value: countryData.subregion },
              {
                label: "Languages",
                value: Object.values(countryData.languages).join(", "),
              },
              {
                label: "Borders",
                value: countryData.borders?.join(", ") || "None",
              },
              {
                label: "Population",
                value: countryData.population.toLocaleString("en-IN"),
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-gray-400">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <NavLink to="/country">
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full transition duration-200 shadow-md">
              ⬅ Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default DeatialCard;
