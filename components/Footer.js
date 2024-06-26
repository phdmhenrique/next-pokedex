import styles from '../styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <p><span>PokeNext</span> &copy; {currentYear}</p>
    </footer>
  )
}
