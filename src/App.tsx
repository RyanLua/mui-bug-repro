import { useState } from 'react';
import styles from './App.module.scss';
import Button from '@mui/material/Button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Button />
        </div>
    );
}

export default App;
