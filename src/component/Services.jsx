import ServiceProps from "./ServiceProps";

const Services = () => {
  return (
    <section className="px-10 py-20 ">
      <hr className="mb-5" />
      <h1 className="text-5xl mb-8 font-bold">Services</h1>

      <div>
        <ServiceProps
          id="01"
          title="Frontend"
          desc="Our web developer is proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate."
          li1="Donec aenean duis vel id mattis nunc"
          li2="Donec aenean duis vel id mattis nunc"
          li3="Donec aenean duis vel id mattis nunc"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />

        <hr className="mb-10" />

        <ServiceProps
          id="01"
          title="Frontend"
          desc="Our web developer is proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate."
          li1="Donec aenean duis vel id mattis nunc"
          li2="Donec aenean duis vel id mattis nunc"
          li3="Donec aenean duis vel id mattis nunc"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />
        <hr className="mb-10" />
        <ServiceProps
          id="01"
          title="Frontend"
          desc="Our web developer is proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate."
          li1="Donec aenean duis vel id mattis nunc"
          li2="Donec aenean duis vel id mattis nunc"
          li3="Donec aenean duis vel id mattis nunc"
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />
      </div>
    </section>
  );
};

export default Services;
