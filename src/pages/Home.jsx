import React from "react";
import Banner from "../components/Banner";
import TrendJobs from "../components/ui/TrendJobs";
import OurServices from "../components/OurServices";
import RelatedJobFields from "../components/RelatedJobFields";

const Home = () => {
  return (
    <>
    <title>home</title>
      <Banner />
      <TrendJobs />
      <OurServices/>
      <RelatedJobFields/>
    </>
  );
};

export default Home;
