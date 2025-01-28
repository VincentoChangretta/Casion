import { casinoBettingSites } from "pages/CasinoPage/data/CasinoListTables.data";

export const CasinoListTables = () => {
  return (
    <section>
      {casinoBettingSites.map((site, index) => (
        <div
          key={index}
          className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <h3 className="text-3xl font-semibold text-gray-800 py-4 px-6 bg-gray-100">
            {site.name}
          </h3>
          <table className="min-w-full table-auto">
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-center font-semibold text-gray-700 bg-gray-50 max-500:px-2 max-500:text-sm">
                  Pro
                </td>
                <td className="px-6 py-4 text-gray-600 max-500:px-2 max-500:text-sm">
                  <ul className="list-disc pl-6">
                    {site.pros.map((item, idx) => (
                      <li key={idx} className="py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-center font-semibold text-gray-700 bg-gray-50 max-500:px-2 max-500:text-sm ">
                  Contro
                </td>
                <td className="px-6 py-4 text-gray-600">
                  <ul className="list-disc pl-6 max-500:px-2 max-500:text-sm">
                    {site.cons.map((item, idx) => (
                      <li key={idx} className="py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};
