import rectangle from "../../assets/rectangle-3.webp";

const SecondSection = () => {
  return (
    <section className="px-6 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 uppercase" style={{ fontFamily: "Against, sans-serif" }}>
            Meet the Founder
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed league-spartan text-justify">
            Jespheb was founded by Ogbogbo Phebe, a passionate fashion designer and creative who is inspired by innovation and the power of self-expression. With an eye for style and a drive to push boundaries, Phebe created Jespheb to help people and brands confidently own their presence.
          </p>

          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 uppercase" style={{ fontFamily: "Against, sans-serif" }}>
            Our Company
          </h2>

          <p className="text-gray-600 leading-relaxed league-spartan text-justify">
            At Jespheb, we inspire individuals and brands to own their presence. Through creative branding, fashion, and lifestyle solutions, we transform confidence into influence and make every presence unforgettable.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={rectangle}
            alt="Founder"
            className="w-full max-w-md lg:max-w-lg mx-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SecondSection;