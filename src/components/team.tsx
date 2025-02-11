import Google from "./google";
import Microsoft from "./microsoft";
import MovingLines from "./moving-lines";
import Shopify from "./shopify";

const Team = () => {
  return (
    <div className="relative overflow-visible">
      <MovingLines className="absolute top-0 left-0 w-full" />
      <div className="pt-6 flex flex-col items-center">
        <p className="text-xl font-light text-white/60 text-center ">
          We&apos;re a team of <span className="text-white">Industry experts,</span>{" "}
          from
        </p>
        <div className="flex mt-12 items-start">
          <Microsoft />
          <Shopify />
          <Google />
        </div>
      </div>
    </div>
  );
};

export default Team;
