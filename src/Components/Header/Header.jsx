import styles from "./Header.module.css";
import { MagnifyingGlass, Bell, CaretDown } from "@phosphor-icons/react";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.greetingSection}>
        <h1>Dashboard</h1>
        <p>
          Good to see you again, Amin
          <span className={styles.greetingEmoji}>😊</span>
        </p>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.searchBar}>
          <MagnifyingGlass size={20} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search memories, folders..."
            className={styles.searchInput}
          />
        </div>

        <button className={styles.iconButton}>
          <Bell size={22} weight="regular" />
          <span className={styles.notificationDot}></span>
        </button>

        <div className={styles.profileSection}>
          <img
            src="/src/assets/images/Muhammad Amin Portfolio.png"
            alt="Muhammad Amin"
            className={styles.profileImage}
          />
          <span className={styles.profileName}>Muhammad Amin</span>
          <CaretDown size={16} weight="bold" />
        </div>
      </div>
    </header>
  );
}

export default Header;
