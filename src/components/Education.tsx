import "./styles/Education.css";

const educationList = [
  {
    period: "Present",
    title: "M.Sc in Software Engineering of Distributed Systems",
    institute: "KTH Royal Institute of Technology",
    description:
      "Currently pursuing my master's degree at KTH, building deeper expertise in advanced software engineering, distributed systems, and research-oriented problem solving.",
  },
  {
    period: "2020 - 2024",
    title: "Bachelor of Science in Computer Science Engineering (Software Engineering)",
    institute: "Islamic University of Technology",
    description:
       "Relevant Coursework - Data Structure, Algorithm, Artificial Intelligence, Server Architecture, Data Communication and Networking.",
  },
  {
    period: "2017 - 2019",
    title: "Higher Secondary Certificate",
    institute: "Notre Dame College",
    description:
      "Completed higher secondary education in science with a GPA of 5.00/5.00.",
  },
];

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      <div className="education-heading">
        <h3>Education</h3>
        <p>
          My academic journey built the foundation for both my software
          engineering work and my research interests.
        </p>
      </div>

      <div className="education-list">
        {educationList.map((item) => (
          <article className="education-card" key={`${item.title}-${item.period}`}>
            <span>{item.period}</span>
            <h4>{item.title}</h4>
            <h5>{item.institute}</h5>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
