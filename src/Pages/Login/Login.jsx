import styles from "./Login.module.css";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "user@gmail.com" && password === "user") {
      setIsLoggedIn(true);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <section className={styles.authContainer}>
      <div className={styles.authBannerSection}>
        <img src="/src/assets/images/Memora Auth Image.png" alt="Auth Banner" />
      </div>

      <div className={styles.authForm}>
        <div className={styles.memoraLogoContainer}>
          <img
            src="/src/assets/images/Memora Logo.png"
            alt="Memora Logo"
            className={styles.memoraLogo}
          />
        </div>
        <h2 className={styles.authFormHeading}>Get Started</h2>
        <p className={styles.welcomeText}>
          Welcome to Memora. Let's create your account.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {showLoginForm ? (
            <button className={styles.loginBtn}>Log in</button>
          ) : (
            <button className={styles.signupBtn}>Sign Up</button>
          )}
        </form>

        {showLoginForm ? (
          ""
        ) : (
          <p className={styles.loginContainer}>
            Already have an account.{" "}
            <span onClick={() => setShowLoginForm(true)}>Log In</span> here.
          </p>
        )}
      </div>
    </section>
  );
}

export default Login;
