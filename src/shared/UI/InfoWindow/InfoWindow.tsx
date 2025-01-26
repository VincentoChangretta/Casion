export const InfoWindow = ({ className, text }) => {
  return (
    <div
      className={`w-[300px] p-[20px] text-xs text-pretty bg-mainBg-inv text-mainBg absolute ${className}`}
    >
      {text}
      <div className="absolute w-[30px] h-[30px] bg-mainBg-inv top-[-10px] left-2/4 -translate-x-2/4 rotate-45"></div>
    </div>
  );
};
