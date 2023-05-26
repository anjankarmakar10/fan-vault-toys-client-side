const Location = ({ src, name }) => {
  return (
    <article
      data-aos="zoom-in-up"
      className="bg-white overflow-hidden shadow-lg rounded-lg"
    >
      <img
        src={src}
        alt={name}
        className="w-full h-60 object-cover rounded-t-lg hover:scale-105
        transition-all"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">{name}</h3>
        <p className="text-gray-600">Main Street, {name}</p>
      </div>
    </article>
  );
};

export default Location;
