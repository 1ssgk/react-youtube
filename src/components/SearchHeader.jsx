import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  /* useEffect */
  useEffect(() => setText(keyword || ""), [keyword]);

  /* input에 keyword 입력 시  */
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  /* input 에서 엔터 or button 클릭 시 */
  const handleSubmitOfSearch = (e) => {
    e.preventDefault();

    /* Router 이동 */
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand"/>
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmitOfSearch} className="w-full flex justify-center">
        <input
        className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleOnChange}
          
        />
        <button onClick={handleSubmitOfSearch} className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
