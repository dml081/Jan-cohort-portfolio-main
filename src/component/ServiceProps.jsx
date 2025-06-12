import React from "react";

const ServiceProps = ({ id, title, desc, li1, li2, li3, image }) => {
  return (
    <section className="flex mb-6 ">
      <div className="space-y-7  w-1/2">
        <h1 className="text-white text-2xl">{id}</h1>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{desc}</p>

        <ul className="m-0">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
      </div>
      <div className="w-1/2">
        <img src={image} />
      </div>
    </section>
  );
};

export default ServiceProps;
