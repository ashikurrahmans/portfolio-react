import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Quotes = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center my-12">
          <ImQuotesLeft fontSize="70px" className="opacity-10" />
        </div>

        <h1 className="text-center font-josefin text-4xl my-6 font-bold">
          My Philosophy
        </h1>
        <p className="my-12 text-6xl text-center font-satisfy">
          Feel Emotions, Build Emotions and <br /> Spread Emotions By Design
        </p>
      </section>
    </div>
  );
};

export default Quotes;
