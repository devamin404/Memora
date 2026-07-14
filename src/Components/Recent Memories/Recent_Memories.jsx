import styles from "./Recent_Memories.module.css";
import { Clock, FolderIcon } from "@phosphor-icons/react";

const recentData = [
  {
    id: 1,
    title: "First Steps at the Park",
    date: "Today, 10:30 AM",
    folder: "My First Baby",
    image:
      "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    excerpt:
      "Aaj subah garden mein khelte hue achanak pehla qadam rakha, hum dono bohut khush hue!",
  },
  {
    id: 2,
    title: "Dinner at Eiffel Tower",
    date: "18 Jan, 2026",
    folder: "Paris Trip",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    excerpt:
      "Raat ka khana aur samne chamakta hua Eiffel Tower. Ek bohut hi khoobsurat raat.",
  },
  {
    id: 3,
    title: "Bought our first car!",
    date: "10 Dec, 2025",
    folder: "Life Milestones",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    excerpt:
      "Aakhir kaar apni pehli gaari le hi li. Hard work sach mein pay off karta hai.",
  },
];

function Recent_Memories() {
  return (
    <section className={styles.recentSection}>
      <div className={styles.sectionHeader}>
        <h2>Recent Memories</h2>
        <a href="#" className={styles.viewAllLink}>
          View All
        </a>
      </div>

      <div className={styles.listContainer}>
        {recentData.map((memory) => (
          <div key={memory.id} className={styles.memoryItem}>
            <img
              src={memory.image}
              alt={memory.title}
              className={styles.thumbnail}
            />

            <div className={styles.memoryDetails}>
              <div className={styles.titleRow}>
                <h3>{memory.title}</h3>
                <span className={styles.timeBadge}>
                  <Clock size={16} /> {memory.date}
                </span>
              </div>

              <p className={styles.excerpt}>{memory.excerpt}</p>

              <div className={styles.folderBadge}>
                <FolderIcon />
                {memory.folder}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recent_Memories;
