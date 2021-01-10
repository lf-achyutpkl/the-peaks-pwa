import ErrorBoundary from "../components/ErrorBoundary";

import Button from "../components/Button/Button";
import NavBar from "../components/NavBar";
import Homepage from "../views/Homepage";

function App() {
  return (
    <ErrorBoundary>
      <NavBar />
      <Homepage />
    </ErrorBoundary>
  );
}

export default App;
