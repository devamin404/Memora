import styles from "./StatsOverview.module.css";
import {
  Folder,
  FileText,
  Image,
  PlayCircle,
  MusicNotes,
} from "@phosphor-icons/react";

const statsData = [
  {
    id: 1,
    title: "Folders",
    count: "12",
    icon: Folder,
    color: "#7057ff",
    bg: "rgba(112, 87, 255, 0.1)",
  },
  {
    id: 2,
    title: "Memories",
    count: "48",
    icon: FileText,
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: 3,
    title: "Photos",
    count: "352",
    icon: Image,
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 4,
    title: "Videos",
    count: "24",
    icon: PlayCircle,
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.1)",
  },
  {
    id: 5,
    title: "Audios",
    count: "16",
    icon: MusicNotes,
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)",
  },
];

function StatsOverview() {
  return (
    <section className={styles.statsRow}>
      {statsData.map((stat) => (
        <div key={stat.id} className={styles.statCard}>
          <div
            className={styles.iconWrapper}
            style={{ backgroundColor: stat.bg, color: stat.color }}
          >
            <stat.icon size={28} weight="fill" />
          </div>

          <div className={styles.textWrapper}>
            <h2>{stat.count}</h2>
            <p>{stat.title}</p>
            <a href="#" className={styles.viewLink}>
              View all
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsOverview;
