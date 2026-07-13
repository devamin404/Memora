import styles from "./Folders_Grid.module.css";
import { Plus, FolderOpen, Images } from "@phosphor-icons/react";

const foldersData = [
  {
    id: 1,
    title: "My First Baby",
    date: "12 Aug, 2026",
    memoriesCount: 24,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8yxhT4djVsOSGDTI0RSVhkNF7rGzWkqn6ENWGlYHXJzOwrsaqeRh5pE&s=10",
  },
  {
    id: 2,
    title: "Wedding Day",
    date: "05 Nov, 2025",
    memoriesCount: 140,
    image:
      "https://www.bollywoodshaadis.com/img/article-2024513617230162581000.webp",
  },
  {
    id: 3,
    title: "Paris Trip",
    date: "20 Jan, 2026",
    memoriesCount: 85,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

function Folders_Grid() {
  return (
    <section className={styles.foldersSection}>
      <div className={styles.sectionHeader}>
        <h2>My Folders</h2>
        <button className={styles.createBtn}>
          <Plus size={20} weight="bold" />
          Create New Folder
        </button>
      </div>

      <div className={styles.gridContainer}>
        {foldersData.map((folder) => (
          <div key={folder.id} className={styles.folderCard}>
            <div
              className={styles.cardBackground}
              style={{ backgroundImage: `url(${folder.image})` }}
            ></div>

            <div className={styles.cardOverlay}></div>

            <div className={styles.topBadge}>
              <FolderOpen size={20} weight="fill" />
            </div>

            <div className={styles.cardContent}>
              <h3>{folder.title}</h3>
              <div className={styles.cardMeta}>
                <span>{folder.date}</span>
                <span className={styles.dot}>•</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Images size={16} /> {folder.memoriesCount} Memories
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Folders_Grid;
