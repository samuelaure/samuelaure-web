import { CONTENT } from '../constants/content';

const HablemosPage = () => {
  return (
    <div className="hablemos-container">
      <iframe
        src={CONTENT.calendarUrl}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Hablemos"
      ></iframe>

      <style>{`
        .hablemos-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default HablemosPage;
