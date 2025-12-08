// src/pages/services/ServicePage.jsx
import React from "react"; 
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { services } from "./data";
import ServiceLayout from "./Design";



export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <p className="text-center mt-20 text-xl">Service not found</p>;
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ServiceLayout service={service} />;
}
