import Image from 'next/image';
import styles from '../styles/Notfound.module.css'

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1>Página não encontrada</h1>
      <p>Ops, parece que esse pokemon não existe!</p>
      <Image
        src="/images/notfound-image.png"
        width={150}
        height={150}
        unoptimezed
      />
    </div>
  );
}
