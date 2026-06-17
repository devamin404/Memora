import Sidebar from "../../Components/Sidebar";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <section className={styles.dashboardContainer}>
      <Sidebar />
      <h1>Right Container</h1>
    </section>
  );
}

export default Dashboard;
