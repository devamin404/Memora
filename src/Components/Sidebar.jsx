import styles from "./Sidebar.module.css";
import {
  FolderIcon,
  SparkleIcon,
  TrashIcon,
  BrainIcon,
} from "@phosphor-icons/react";
import logo from "../assets/images/Memora Logo.png";

const navigationItems = [
  { label: "Dashboard", icon: FolderIcon, active: true },
  { label: "All Memories", icon: BrainIcon },
  { label: "Favourites", icon: SparkleIcon },
  { label: "Trash", icon: TrashIcon },
];

const folders = [
  "My First Baby",
  "Wedding Day",
  "University Life",
  "Europe Trip",
  "First Job",
  "Family Moments",
];

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <div>
        <div className={styles.brandSection}>
          <div className={styles.brandLogoWrap}>
            <img src={logo} alt="Memora Logo" />
          </div>
          <h1>Memora</h1>
        </div>

        <nav className={styles.mainNavigation}>
          {navigationItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
            >
              <span className={styles.navIconWrap}>
                <Icon size={18} weight={active ? "fill" : "regular"} />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </nav>

        <section className={styles.foldersContainer}>
          <div className={styles.folderSectionHeader}>
            <h2>My folders</h2>
            <button
              className={styles.folderAddBtn}
              type="button"
              aria-label="Add folder"
            >
              +
            </button>
          </div>
        </section>

        <nav className={styles.foldersList}>
          {folders.map((folder) => (
            <div key={folder} className={styles.folderItem}>
              <span className={styles.folderIconWrap}>
                <FolderIcon size={18} weight="fill" />
              </span>
              <p>{folder}</p>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
