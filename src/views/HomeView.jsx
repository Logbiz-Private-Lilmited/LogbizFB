import React from "react";
import Stats from "../components/HeroSection/Stats";
import ServiceBtn from "../components/HeroSection/ServiceBtn";

import Hero1 from "../assets/HeroSection/Hero1.jpeg";
<<<<<<< Updated upstream
=======
import infoDetails from "../components/Homeview/InfoDetails";
import InfoCards from "../components/Homeview/InfoCards";
import BoxesComponent from "../components/Homeview/ServiceBoxes";
import BoxData from "../components/Homeview/BoxData";
import BoxesCarousel from "../components/Homeview/ServiceBoxes";
>>>>>>> Stashed changes

export const HomeView = () => {
  return (
    <div className="w-[98%] mx-auto">
      <section className="flex flex-col justify-between md:h-[850px] bg-gray-100 rounded-xl p-20 gap-8 md:gap-10">
        <div className="md:text-5xl xl:text-6xl 2xl:text-7xl font-bold lg:w-2/3 md:1/4 sm:w-1/2 w-full text-4xl lg:pr-[210px]">
          A reliable <span className="text-customOrange">logistic</span> service
          for <span className="text-customOrange">all scales</span> of business.{" "}
        </div>
        <div className="flex justify-between md:items-end items-center flex-col md:flex-row gap-8 lg:gap-0">
          <Stats />
          <div className="flex gap-2 lg:gap-4 flex-col md:flex-row">
            <ServiceBtn
              img={Hero1}
              title="Provide your Logistic service"
              scrollTo="section1"
            />
            <ServiceBtn
              img={Hero1}
              title="Provide your Logistic service"
              scrollTo="section2" // Change this to another section ID if needed
            />
          </div>
        </div>
      </section>
<<<<<<< Updated upstream

      <section
        className="flex flex-col gap-20 mt-8 h-full bg-teal-300"
        id="section1"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
      </section>

      <section
        className="flex flex-col gap-20 mt-8 h-full bg-slate-500"
        id="section2"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
        <p id="section2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi
          minus delectus officia, accusamus deserunt quo sit repellat voluptas
          quae, voluptates aspernatur ducimus? Aspernatur ipsum odio provident
          ea. Totam, adipisci?
        </p>
      </section>
=======
      <InfoCards info={infoDetails} />
      <BoxesCarousel info={BoxData} />
>>>>>>> Stashed changes
    </div>
  );
};
