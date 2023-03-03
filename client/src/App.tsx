import "./App.css";
import Loader from "./components/Loader";
import useSchedule from "./hooks/schedule";

function App() {
  const [data, loading, error] = useSchedule();

  if (loading) {
    return <Loader />;
  }

  if (error !== "") {
    return (
      <div className="app">
        <h1 className="error">{error}</h1>
      </div>
    );
  }

  if (data == null || data.length === 0) {
    return (
      <div className="app">
        <h1>No data</h1>
      </div>
    );
  }

  return (
    <div className="schedule">
      <div className="schedule-title">
        <h1>NBA Schedule</h1>
        <span>{new Date().toString()}</span>
      </div>

      <div className="match-container">
        <div className="match title">
          <span>Team 1</span>
          <span>Team 2</span>
          <span>Time</span>
        </div>
        {data.map((match, idx) => {
          return (
            <div key={idx} className="match">
              <span>{match.one}</span>
              <span>{match.two}</span>
              <span>{match.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
