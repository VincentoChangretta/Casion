import { bettingSites } from "pages/MainPage/data/tables";

export const MainPageTables = () => {
  return (
    <section>
      <div className="main-container">
        <div className="mb-[30px]">
          <h2 className="smallTitle text-3xl mb-[20px] text-text-primary">
            10 Migliori Siti Scommesse non AAMS
          </h2>
          <ul className="flex flex-wrap gap-5">
            {[
              "Cobra",
              "Boomerang",
              "Sportaza",
              "22bet",
              "ZotaBet",
              "Casinia",
              "Legiano",
              "Infinity",
              "CrownPlay",
              "Snatch",
            ].map((site, index) => {
              const shade = 10 * (index % 2 === 0 ? 1 : -1);
              const backgroundColor = `hsl(200, 50%, ${50 + shade}%)`;
              return (
                <li
                  key={index}
                  className="max-w-fit p-4 text-3xl text-mainBg ease-in-out"
                  style={{ backgroundColor }}
                >
                  {index + 1}. {site}
                </li>
              );
            })}
          </ul>
        </div>

        {bettingSites.map((site, index) => (
          <div
            key={index}
            className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <h3 className="text-3xl font-semibold text-gray-800 py-4 px-6 bg-gray-100">
              {site.name}
            </h3>
            <table className="min-w-full table-auto">
              <tbody>
                {site.details.map((detail, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50">
                      {detail.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {Array.isArray(detail.content) ? (
                        <ul className="list-disc pl-6">
                          {detail.content.map((item, idx) => (
                            <li key={idx} className="py-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        detail.content
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};
