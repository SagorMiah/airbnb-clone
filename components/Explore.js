import SmallCard from "./SmallCard";

const Explore = ({ exploreData }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((item) => (
          <SmallCard
            key={item.img}
            img={item.img}
            distance={item.distance}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
