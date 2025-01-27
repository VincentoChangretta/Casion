export const CasinoTopList = ({ data }) => {
  return (
    <section className="mb-[30px]">
      <h2 className="smallTitle text-3xl mb-[20px] text-text-primary">
        10 Migliori Siti Scommesse non AAMS
      </h2>
      <ul className="flex flex-wrap gap-5">
        {data.map((casino: string, index: number) => {
          const shade = 10 * (index % 2 === 0 ? 1 : -1);
          const backgroundColor = `hsl(200, 50%, ${50 + shade}%)`;
          return (
            <li
              key={index}
              className="max-w-fit p-4 text-3xl text-mainBg ease-in-out"
              style={{ backgroundColor }}
            >
              {index + 1}. {casino}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
