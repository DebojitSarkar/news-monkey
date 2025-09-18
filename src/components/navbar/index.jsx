import React, { useState } from "react";
import NavHeader from "./NavHeader";
import { navHeader } from "../../util/constants";
import { IoSearchSharp } from "react-icons/io5";

function Navbar({ articles, setArticles, setShouldFetch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setShouldFetch((prev) => !prev);
    }
    handleSearch();
    localStorage.setItem("articles")
  };

  const handleSearch = () => {
    const query = search.trim();
    if (query === "") {
      return;
    }

    const result = articles.filter(
      (e) =>
        e.title.toLowerCase().startsWith(query.toLowerCase()) ||
        e.description.toLowerCase().startsWith(query.toLowerCase())
    );

    if (result.length > 0) {
      setArticles(result);
    }
  };

  return (
    <nav className="flex items-center justify-between border-y border-black py-2">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-[10px] px-[10px]">
        <h1 className="font-serif text-4xl">The Telegraph</h1>
        <h1 className="text-3xl font-semibold italic text-zinc-500">online</h1>
      </div>

      {/* CENTER */}
      <div className="flex justify-center px-[10px] py-[10px]">
        {navHeader.map((header, index) => (
          <NavHeader key={index} header={header} />
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-1 px-10">
        <IoSearchSharp
          className="text-gray-500 hover:cursor-pointer"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[240px] rounded-md border border-black px-2 focus:outline-none focus:ring-1 focus:ring-black"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
    </nav>
  );
}

export default Navbar;
