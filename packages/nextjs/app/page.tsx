import type { NextPage } from "next";
import { MetisLogo } from "~~/components/assets/MetisLogo";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <div className="flex flex-col items-center justify-center text-accent">
          <MetisLogo className="w-[240px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
