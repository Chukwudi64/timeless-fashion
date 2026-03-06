import { Eye, Lightbulb } from "lucide-react";

const ThirdSection = () => {
  return (
    <section className="px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Mission */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded mb-4">
            <Eye className="text-white w-5 h-5" />
          </div>

          <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "Against, serif" }}>OUR MISSION</h3>

          <p className="text-gray-600 leading-relaxed league-spartan">
            Our mission is to empower individuals and brands through fashion,
            creativity, and branding—transforming identity into confidence,
            and confidence into influence.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded mb-4">
            <Lightbulb className="text-white w-5 h-5" />
          </div>

          <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "Against, serif" }}>OUR VISION</h3>

          <p className="text-gray-600 leading-relaxed league-spartan">
            To become a global symbol of presence and confidence, inspiring
            individuals and brands to boldly own their identity and make a
            lasting impact.
          </p>
        </div>

        {/* Values */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: "Against, serif" }}>VALUES</h3>

          <ul className="space-y-4 text-gray-600 league-spartan">
            <li>
              <span className="font-semibold text-black">• Authenticity – </span>
              We believe true presence begins with being real, original,
              and unapologetically yourself.
            </li>

            <li>
              <span className="font-semibold text-black">• Innovation – </span>
              Inspired by creativity and forward thinking, we constantly push
              boundaries to redefine style and branding.
            </li>

            <li>
              <span className="font-semibold text-black">• Confidence – </span>
              We empower individuals and brands to stand tall, express boldly,
              and own their presence.
            </li>

            <li>
              <span className="font-semibold text-black">• Excellence – </span>
              From design to delivery, we uphold the highest standards in
              everything we create.
            </li>
          </ul>
        </div>

        {/* Next Project */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: "Against, serif" }}>NEXT PROJECT</h3>

          <p className="text-gray-600 leading-relaxed league-spartan">
            Jespheb’s next project is the launch of the “Own Your Presence”
            Capsule Collection, a limited-edition line of 6–10 timeless,
            versatile pieces designed to embody confidence, identity, and
            innovation. Inspired by our muse Doris Amadi and guided by
            sustainable practices, the collection will feature eco-conscious
            fabrics, bold yet minimalist silhouettes, and powerful storytelling
            through fashion editorials and digital campaigns.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4 league-spartan">
            The launch will be amplified with a hybrid showcase event,
            influencer collaborations, and a customer engagement campaign,
            positioning Jespheb as more than a fashion brand—a movement that
            empowers individuals to own their presence with style and purpose.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;