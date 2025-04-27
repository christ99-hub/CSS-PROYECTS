import "./TimelineDetails.css";

const TimelineDetails = () => {
  return (
    <section className="timelineDetails">
      <div className="title-container">
        <img className="TimelineDetails_img" src="../timeline.png" alt="imagen" />
        <p className="h2details">2023 Projects</p>
      </div>
      <div className="texts_container">
      <p className="text1Details">A digital studio focusing on limitless creativity. Lenta involved in
        creating digita art, design, animation, or perhaps something
        even more unique. The ability to explorecreativity without
        limits opens up endless possibilities!</p>
        <p className="text2Details">A digital studiofocusing on limitless creativity. Lenta involved in
        creating digita art, design, animation, or perhaps something
        even more unique. The ability to explorecreativity without
        limits opens up endless possibilities!</p>
        <div className="btn-container">
            <button>Case Study</button>
            <button>View Proyects</button>

        </div>
        </div>
    </section>
  );
};

export default TimelineDetails;
