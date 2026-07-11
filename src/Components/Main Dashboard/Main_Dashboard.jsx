import Header from "../Header/Header";
import styles from "./Main_Dashboard.module.css";
import StatsOverview from "../StatsOverview/StatsOverview";

function Main_Dashboard() {
  return (
    <main className={styles.mainContent}>
      <Header />
      <StatsOverview />
    </main>
  );
}

export default Main_Dashboard;
