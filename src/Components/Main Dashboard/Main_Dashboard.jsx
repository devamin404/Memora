import Header from "../Header/Header";
import styles from "./Main_Dashboard.module.css";
import StatsOverview from "../StatsOverview/StatsOverview";
import FoldersGrid from "../Folders Grid/Folders_Grid";
import Recent_Memories from "../Recent Memories/Recent_Memories";

function Main_Dashboard() {
  return (
    <main className={styles.mainContent}>
      <Header />
      <StatsOverview />
      <FoldersGrid />
      <Recent_Memories />
    </main>
  );
}

export default Main_Dashboard;
