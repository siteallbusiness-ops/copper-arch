import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.wrap}>
        <div className={styles.panel}>
          <p className={styles.kicker}>Wrong turn</p>
          <h1 className={styles.title}>This table isn&apos;t set.</h1>
          <p className={styles.text}>
            The page you asked for isn&apos;t on tonight&apos;s board. Head back to the salon.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.link}>
              Return home
            </Link>
            <Link href="/services" className={styles.linkGhost}>
              View board
            </Link>
          </div>
        </div>
      </main>
      <Footer variant="home" />
    </>
  );
}
