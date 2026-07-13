import Header from "../Header/Header";
import styles from "./Main_Dashboard.module.css";
import StatsOverview from "../StatsOverview/StatsOverview";
import FoldersGrid from "../Folders Grid/Folders_Grid";

function Main_Dashboard() {
  return (
    <main className={styles.mainContent}>
      <Header />
      <StatsOverview />
      <FoldersGrid />
    </main>
  );
}

export default Main_Dashboard;
