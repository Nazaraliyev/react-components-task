import Button from './components/button';
import { buttonsInitialData } from './data/buttons';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.buttons}>
        {buttonsInitialData.map((button, i) => (
          <Button
            key={i}
            shape={button?.shape || ''}
            icon={button?.icon}
            size={button.size}
            variant={button.variant}
          >
            {button?.children}
          </Button>
        ))}
      </div>
    </main>
  );
}
