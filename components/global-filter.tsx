import React, { ChangeEvent } from "react";

type GfilterProps = {
  filter: string | undefined;
  setFilter: (value: string) => void;
};

const Gfilter: React.FC<GfilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <span>
        <input
          className="border-2 border-red-400 px-2 py-4 w-[700px] rounded-3xl outline-none"
          type="text"
          value={filter || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
        />
      </span>
    </div>
  );
};

export default Gfilter;
