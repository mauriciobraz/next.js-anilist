import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1622] py-2">
      <h1 className="text-xl font-bold text-[#edf1f5]">
        Welcome, this is a <a href="https://anilist.co">AniList</a> clone made
        for learning purposes.
      </h1>
    </div>
  );
};

export default Home;
