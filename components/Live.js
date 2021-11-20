import MediumCard from "./MediumCard";

const Live = ({ cardsData }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardsData?.map((item) => (
          <MediumCard key={item.img} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Live;
