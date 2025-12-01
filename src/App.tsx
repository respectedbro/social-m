import "./App.scss";
import { auth } from "./shared/api/firebase.ts";

function App() {
  console.log("FIREBASE AUTH TEST:", auth);

  return (
    <div className="container">
      <div>Test</div>
    </div>
  );
}

export default App;
