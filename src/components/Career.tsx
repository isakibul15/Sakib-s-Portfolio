import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Reddot Digital Limited</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Gained a hands-on understanding and coding using Angular
              Framework on Jamuna Bank HRIS software solution. Develop Games for
              Robi App Service using HTML5 engine. Gained a hands-on experience
              of the software testing process using Selenium to test different
              modules on UAT stage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Confidence Software Limited</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engaging in the design and development of dynamic feature
              section, utilizing technologies. Provided ongoing support and
              maintenance for the Developed Software, implementing updates, and
              ensuring the software stability and functionality. Contributed to
              the continuous improvement of development processes and workflows,
              championing innovation, efficiency, and collaboration within the
              team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Blixtra</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
