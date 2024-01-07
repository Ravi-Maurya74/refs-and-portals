import Player from "./components/Player.jsx";
import TimerChanllenege from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChanllenege title="Easy" targetTime={1} />
        <TimerChanllenege title="Not easy" targetTime={5} />
        <TimerChanllenege title="Getting tough" targetTime={10} />
        <TimerChanllenege title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
