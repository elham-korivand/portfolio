import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import AboutItem from "../components/AboutItem";
import { IServices } from "../type";

function index({ service }) {
  return (
    <div>
      <h5 className="text-white p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt
        temporibus eligendi laboriosam? Quo ab laborum quas debitis tempora
        inventore corporis soluta tenetur perspiciatis vel. Earum, incidunt?
        Ullam, esse corporis.
      </h5>
      <h2 className="text-white font-bold p-3 text-xl">What I Offer</h2>
      <div className="flex justify-around flex-wrap mb-3">
        {service.map((item) => {
          return <AboutItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default index;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services").then((res) =>
    res.json()
  );

  return { props: { service: res } };
};
