import { casinoProsCons } from "pages/CasinoPage/data/CasinoListTables.data";

export const CasinoProControTable = () => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="smallTitle font-semibold text-gray-800 py-4 px-6 bg-gray-100">
        {casinoProsCons.title}
      </h2>
      <div className="flex px-6 py-4  max-500:px-3">
        <div className="w-1/2 pr-4 max-500:pr-2">
          <h3 className="font-semibold text-lg text-gray-700 mb-2 ">Pro</h3>
          <ul className="list-disc pl-6 text-gray-600">
            {casinoProsCons.pros.map((item, idx) => (
              <li key={idx} className="py-1 max-500:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">Contro</h3>
          <ul className="list-disc pl-6 text-gray-600">
            {casinoProsCons.cons.map((item, idx) => (
              <li key={idx} className="py-1 max-500:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
