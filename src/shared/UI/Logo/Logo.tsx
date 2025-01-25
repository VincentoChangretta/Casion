import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";

interface logoProps {
  className?: string;
}

export const Logo: FC<logoProps> = ({ className }) => {
  return (
    <Link to="/" className={`text-5xl ${className}`}>
      <div className="flex items-center gap-[15px]">
        <FontAwesomeIcon className="text-elemColor" icon={faChartSimple} />
        <div className="text-xl font-extrabold">Siti non AAMS</div>
      </div>
    </Link>
  );
};
