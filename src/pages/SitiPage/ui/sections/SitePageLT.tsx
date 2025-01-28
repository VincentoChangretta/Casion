import { paymentMethods } from "pages/SitiPage/data/info";

export const SitePageLT = () => {
  return (
    <section className="text-xl max-530:text-sm">
      <div className="main-container">
        <h2 className="smallTitle mb-[20px]">
          Siti non AAMS con Bonus Senza Deposito e i loro Metodi di Prelievo
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mb-[30px]">
            {/* Table Header using map */}
            <thead>
              <tr className="border-b border-gray-200">
                {[
                  "Metodo di Pagamento",
                  "Tempi per il Deposito",
                  "Tempi per il Prelievo",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-lg font-semibold text-gray-700 max-530:px-1 max-380:text-sm"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body using map */}
            <tbody>
              {paymentMethods.map((payment, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-700 bg-gray-50 max-530:px-2">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 text-gray-600 max-530:px-2">
                    {payment.depositTime}
                  </td>
                  <td className="px-6 py-4 text-gray-600 max-530:px-2">
                    {payment.withdrawalTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
