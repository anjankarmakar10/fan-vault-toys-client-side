import gallaryData from "./data";

const Gallary = () => {
  return (
    <div className="bg-[#EC0973]">
      <div className="p-4 container mx-auto py-12">
        <div className="mx-auto w-fit bg-[#00ACED] text-white font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
          Features
        </div>

        <section className="gallary">
          {gallaryData.map((item) => (
            <article data-aos="zoom-in" className="item" key={item.id}>
              <img src={item.image} alt="" />
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Gallary;
