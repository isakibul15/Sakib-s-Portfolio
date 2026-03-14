import "./styles/Awards.css";

const awards = [
  {
    title: "Winner — Kolomolo AI Business Value Hackathon",
    issuer: "Issued by Kolomolo · Feb 2026",
    summary:
      "Built a proprietary P&L forecasting model analyzing public financial reports and market data, deployed as a web application. Competed among 150+ participants at AWS Sweden HQ.",
    details:
      "Our Klarna team won the 2-day Kolomolo AI Business Value Hackathon hosted at Amazon Web Services (AWS) Sweden HQ. We developed a predictive model that analyzed public financial reports and market data, generated forecasts with automated textual explanations, and delivered the solution as a web app with visual breakdowns of key variables.",
  },
];

const Awards = () => {
  return (
    <section className="awards-section section-container" id="awards">
      <div className="awards-heading">
        <h3>Honors & Awards</h3>
      </div>

      <div className="awards-list">
        {awards.map((award) => (
          <article className="awards-card" key={award.title}>
            <h4>{award.title}</h4>
            <h5>{award.issuer}</h5>
            <p className="awards-summary">{award.summary}</p>
            <p>{award.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Awards;
