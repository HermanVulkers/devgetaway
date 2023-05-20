import Head from 'next/head';

import { FirebaseUiLogin } from '@/firebase/firebase-ui';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/firebase';

export default function Authentication() {
    return (
        <>
            <Head>
                <title>devgetaway - authentication</title>
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

            <main>
                <FirebaseUiLogin />
            </main>
        </>
    );
}
