import React from 'react';
import styles from './AuthLayout.module.scss'

interface Props {
    title: string,
    children: React.ReactNode
}

export const AuthLayout: React.FC<Props> = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};