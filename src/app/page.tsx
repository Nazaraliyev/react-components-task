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

{
  /* <Button shape="round" size="large" variant="primary">
          Primary Button
        </Button>
        <Button size="medium" variant="default">
          Default Button
        </Button>
        <Button shape="round" size="small" variant="dashed">
          Dashed Button
        </Button>
        <Button shape="round" size="large" variant="danger">
          Danger
        </Button>
        <Button
          shape="round"
          size="medium"
          icon={<LoadIcon />}
          variant="primary"
        >
          Download
        </Button>
        <Button
          shape="circle"
          size="medium"
          icon={<LoadIcon />}
          variant="primary"
        /> */
}
