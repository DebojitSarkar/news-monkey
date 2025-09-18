import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function NavHeader({ header }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-2 flex items-center justify-center text-[15px] font-semibold decoration-2 underline-offset-8 hover:cursor-pointer hover:text-zinc-500 hover:underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{header}</p>

      {header === "MORE" &&
        (isHovered ? (
          <FaAngleUp
            size={14}
            className="ml-1 transition-colors hover:text-zinc-500"
          />
        ) : (
          <FaAngleDown
            size={14}
            className="ml-1 transition-colors hover:text-zinc-500"
          />
        ))}
    </div>
  );
}

export default NavHeader;
