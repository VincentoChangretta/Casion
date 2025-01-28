import "./Loading.css";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-mainBg-inv-dark">
      <span className="loader"></span>
    </div>
  );
};
