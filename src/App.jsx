import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div className={styles.loginWrapper}>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
      <Dashboard />
    </>
  );
}

export default App;
