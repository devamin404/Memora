import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";
import Main_Dashboard from "../../Components/Main Dashboard/Main_Dashboard";

function Dashboard() {
  return (
    <section className={styles.dashboardContainer}>
      <Sidebar />
      <Main_Dashboard />
    </section>
  );
}

export default Dashboard;
