import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { FC } from "react";

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return <h1>Hello World</h1>;
};

export default Home;
