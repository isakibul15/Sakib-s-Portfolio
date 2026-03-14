import "./styles/Research.css";

const researchWorks = [
  {
    title: "Detection of Skin Cancer: A Deep Learning Approach",
    venue:
      "The 20th IEEE International Conference on Ubiquitous Intelligence and Computing, Published by IEEE",
    summary:
      "A deep learning approach was employed to develop a highly accurate and efficient model (91% validation accuracy) for skin cancer detection, utilizing transfer learning from pre-trained architectures (DenseNet201, ResNet50, VGG16) and achieving F1-scores up to 1.00 for specific attributes.",
  },
  {
    title:
      "Optimizing Maternal Mental Health: A Study on Boosting Algorithms for Suicidal Tendencies Prediction in Postpartum Depression",
    venue:
      "7th International Conference on Inventive Computation Technologies ICICT 2024, Published by IEEE",
    summary:
      "A machine learning approach was used, where we collected data from a survey on postpartum depression symptoms and applied five boosting algorithms to enhance predictive performance. The primary focus was on accuracy, precision, F-1 score, and AUC score metrics. XGBoost demonstrated the highest accuracy at 99.15%, followed by LightGBM and Catboost at 96.15% and 94.02% respectively. These findings suggest that boosting algorithms, particularly XGBoost, could be pivotal in assessing the risk of postpartum depression and potentially preventing adverse outcomes.",
  },
  {
    title:
      "PrivacyExtractor: Automated Annotation and Classification of Privacy Concerns in User-generated App Reviews",
    venue:
      "Department of Computer Science and Engineering (CSE), Islamic University of Technology (IUT), Board Bazar, Gazipur-1704, Bangladesh",
    summary:
      "My thesis presents the development of a sophisticated tool designed to automatically annotate and classify privacy-related user reviews from the Google Play Store and a novel dataset. Through extensive experimentation, ensemble models, particularly those incorporating Random Forest classifiers, outperformed transformer-based models in accurately identifying and categorizing privacy issues and suggestions from user feedback. The work also highlights the importance of tailored data augmentation techniques for different machine learning algorithms and demonstrates strong potential for real-world applicability.",
  }
];

const Research = () => {
  return (
    <section className="research-section section-container" id="research">
      <div className="research-heading">
        <h3>Publications</h3>
      </div>

      <div className="research-list research-list-publications">
        {researchWorks.map((item) => (
          <article className="research-card" key={item.title}>
            <h4>{item.title}</h4>
            <h5>{item.venue}</h5>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Research;
