import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.appContainer}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;