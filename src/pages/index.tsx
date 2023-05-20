import Head from 'next/head';
import { LoginScreen } from '@/components/login-screen/login-screen';
import { useSession } from 'next-auth/react';
import { HomeScreen } from '@/components/home-screen/home-screen';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useEffect, useState } from 'react';

export default function Home() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                console.log('uid', uid);
                setUser(user); // set user state to user
            } else {
                // User is signed out
                console.log('user is logged out');
                setUser(null); // set user state to null
            }
        });
    }, []);

    return (
        <>
            <Head>
                <title>devgetaway - explore</title>
                <meta
                    name="description"
                    content="devgetaway - workspace exchange for software developers"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>{user ? <HomeScreen /> : <LoginScreen />}</main>
        </>
    );
}
