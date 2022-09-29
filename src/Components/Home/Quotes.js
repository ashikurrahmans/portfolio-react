import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Layout from "./../Shared/Layout";

const Quotes = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center my-12">
          <ImQuotesLeft fontSize="70px" className="opacity-10" />
        </div>

        <h1 className="text-center  my-6 font-josefin text-4xl font-bold">
          My Philosophy
        </h1>
        <p className="my-12 text-6xl text-center font-TheHillsPersonalUseOnly tracking-wider	">
          Feel Emotions, Build Emotions and <br /> Spread Emotions By Design
        </p>
      </Layout>
    </>
  );
};

export default Quotes;
