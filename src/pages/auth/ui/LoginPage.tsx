import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '@/shared/api/firebase.ts';
import {AuthLayout} from '@/pages/auth/ui/AuthLayout.tsx';
import {Link} from 'react-router-dom';

import styles from './AuthLayout.module.scss'

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('')
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err:any) {
            setError(err.message)
        }
    };

    return (
        <AuthLayout title='Вход'>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button type='submit'>Войти</button>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.link}>
                    Нет аккаунта? <Link to='/register'>Создать</Link>
                </div>

            </form>
        </AuthLayout>
    );
};