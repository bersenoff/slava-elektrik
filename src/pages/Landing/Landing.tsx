import React from "react";

import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import MainSection from "./components/MainSection";
import Discount from "./components/Discount";
import HowItWorks from "./components/HowItWorks";

const Landing: React.FC = () => (
  <>
    <MainSection />
    <Advantages />
    <Discount />
    <HowItWorks />
    <Reviews />
  </>
);

export default Landing;
