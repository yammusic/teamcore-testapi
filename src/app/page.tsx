import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Welcome</h2>

      <Link href="/api/questions">Questions API</Link>
    </main>
  );
}
