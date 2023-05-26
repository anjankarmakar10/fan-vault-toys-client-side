import React from "react";
import Location from "./Location";

const Locations = () => {
  return (
    <section className="py-12 bg-gray-100 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Location
            src={
              "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fa10bb11a-ebee-11ec-a7ea-792e433452b2.jpg?crop=4976%2C3317%2C721%2C39"
            }
            name={"New York City"}
          />
          <Location
            src={
              "https://www.civitatis.com/blog/wp-content/uploads/2022/08/portada-washington.jpg"
            }
            name={"Washington, DC"}
          />
          <Location
            src={
              "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/morar-no-texas.jpg.optimal.jpg"
            }
            name={"Texas"}
          />
          <Location
            src={
              "https://ktla.com/wp-content/uploads/sites/4/2022/10/GettyImages-805157508.jpg?strip=1"
            }
            name={"California"}
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
