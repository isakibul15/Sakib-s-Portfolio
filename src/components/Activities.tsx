import "./styles/Activities.css";

const extracurricularItems = [
  {
    period: "2023/09 – present",
    title: "Operation Executives",
    organization: "IUT Computer Society (IUTCS)",
    description:
      "As an Operations Executive and Sponsorship Coordinator, I oversee various aspects of our organization, ensuring smooth administrative operations and successful events. My responsibilities include supervising membership recruitment programs, conducting regular meetings, planning and executing workshops and competitions, coordinating meetings with sponsors, drafting event budgets and sponsorship proposals, managing club funds, and fostering outreach and collaborations for our organization's growth and success.",
  },
];

const Activities = () => {
  return (
    <section className="activities-section section-container" id="activities">
      <div className="activities-heading">
        <h3>Extracurricular Activities</h3>
      </div>

      <div className="activities-list">
        {extracurricularItems.map((item) => (
          <article className="activities-card" key={item.title}>
            <span>{item.period}</span>
            <h4>{item.title}</h4>
            <h5>{item.organization}</h5>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Activities;
