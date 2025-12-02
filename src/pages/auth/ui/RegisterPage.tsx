import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '@/shared/api/firebase.ts';
import {AuthLayout} from '@/pages/auth/ui/AuthLayout.tsx';
import {Link} from 'react-router-dom';

import styles from './AuthLayout.module.scss'

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('')
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err:any) {
            setError(err.message)
        }
    };

    return (
        <AuthLayout title='Регистрация'>
            <form onSubmit={handleRegister}>
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
                <button type='submit'>Создать аккаунт</button>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.link}>
                    Уже есть аккаунт? <Link to='/login'>Войти</Link>
                </div>

            </form>
        </AuthLayout>
    );
};