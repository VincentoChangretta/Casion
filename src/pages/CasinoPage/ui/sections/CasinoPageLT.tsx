export const CasinoPageLT = () => {
  const paymentMethods = [
    {
      method: "Carte di credito (VISA, Mastercard)",
      depositTime: "Istantaneo",
      withdrawalTime: "1-3 giorni lavorativi",
    },
    {
      method: "Skrill",
      depositTime: "Istantaneo",
      withdrawalTime: "Istantaneo",
    },
    {
      method: "Neteller",
      depositTime: "Istantaneo",
      withdrawalTime: "Istantaneo",
    },
    {
      method: "Bonifico bancario",
      depositTime: "1-3 giorni lavorativi",
      withdrawalTime: "3-5 giorni lavorativi",
    },
    { method: "Payz", depositTime: "Istantaneo", withdrawalTime: "Istantaneo" },
    {
      method: "MiFinity",
      depositTime: "Istantaneo",
      withdrawalTime: "Istantaneo",
    },
    {
      method: "Criptovalute (Bitcoin, Ethereum, Litecoin)",
      depositTime: "Istantaneo",
      withdrawalTime: "Istantaneo",
    },
    {
      method: "Jeton",
      depositTime: "Istantaneo",
      withdrawalTime: "Istantaneo",
    },
  ];

  return (
    <section className="mb-section text-xl">
        <h2 className="smallTitle mb-[20px] text-text-primary">
          Siti casinò non AAMS sicuri e i loro metodi di pagamento
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mb-[30px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-200">
                {[
                  "Metodo di Pagamento",
                  "Tempo Deposito",
                  "Tempo Prelievo",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-lg font-semibold text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {paymentMethods.map((payment, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-700 bg-gray-50">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {payment.depositTime}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {payment.withdrawalTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </section>
  );
};
