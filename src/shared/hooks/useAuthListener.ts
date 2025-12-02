import {useAppDispatch} from '@/shared/hooks/reduxHooks.ts';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/shared/api/firebase";
import {useEffect} from 'react';
import {setUser} from '@/entities/user/model/userSlice.ts';

export const useAuthListener = () => {

        const dispatch = useAppDispatch();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
                if (fbUser) {
                    dispatch(
                        setUser({
                            uid: fbUser.uid,
                            email: fbUser.email,
                            displayName: fbUser.displayName,
                            photoURL: fbUser.photoURL,
                        })
                    );
                } else {
                    dispatch(setUser(null));
                }
            });

            return () => unsubscribe();
        }, [dispatch]);
    };
