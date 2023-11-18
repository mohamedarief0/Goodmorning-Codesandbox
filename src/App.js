import "./styles.css";

export default function App() {
  const date = new Date();
  const currentTime = date.getHours();
  const currentAm = date.getMinutes();
  console.log(currentTime);
  let valuee;
  if ((currentTime >= 1) & (currentTime < 12)) {
    valuee = "goodmorning";
  } else if ((currentTime >= 12) & (currentTime <= 17)) {
    valuee = "good Afternoon";
  } else {
    valuee = "Good evening";
  }

  return (
    <div className="App">
      <h1
        className={
          (currentTime >= 1) & (currentTime < 12)
            ? "red"
            : (currentTime >= 12) & (currentTime <= 17)
            ? "green"
            : "blue"
        }
      >
        {valuee + " " + currentTime + " " + currentAm}
      </h1>
    </div>
  );
}
