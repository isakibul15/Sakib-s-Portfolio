import "./styles/Volunteering.css";

const volunteeringItems = [
  {
    title: "Room Process Manager (RPM)",
    organization: "Students' Nobel NightCap",
    period: "Aug 2025 - Dec 2025 · 5 mos",
    description:
      "Led internal transport logistics and coordinated volunteers during the event night to ensure smooth crew movement, and a seamless guest experience.",
  },
];

const Volunteering = () => {
  return (
    <section className="volunteering-section section-container" id="volunteering">
      <div className="volunteering-heading">
        <h3>Volunteering</h3>
      </div>

      <div className="volunteering-list">
        {volunteeringItems.map((item) => (
          <article className="volunteering-card" key={item.title}>
            <h4>{item.title}</h4>
            <h5>{item.organization}</h5>
            <span>{item.period}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
