import { useState } from "react";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";
import Collections from "./Collections";
import OrderProcess from "../components/OrderProcess";
import CustomOrderForm from "../components/CustomOrderForm";
import FAQ from "../components/FAQ";

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    designCategory: "",
    specificRequirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white font-league-spartan">
       <Hero />
            <SecondaryHero />
            <Collections />
            <OrderProcess />
            <CustomOrderForm />
            <FAQ />
    </div>
  );
};

export default Home;
