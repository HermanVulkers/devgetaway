import React, { FC, useCallback, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from './firebase';
import 'firebaseui/dist/firebaseui.css';

const uiConfig = {
    signInSuccessUrl: '/profile',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'www.google.com',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
        window.location.assign('www.google.com');
    },
};

export const FirebaseUiLogin = () => {
    const loadFirebaseui = useCallback(async () => {
        const firebaseui = await import('firebaseui');
        const firebaseUi =
            firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(auth);
        firebaseUi.start('#firebaseui-auth-container', uiConfig);
    }, []);

    useEffect(() => {
        loadFirebaseui();
    }, [loadFirebaseui]);

    return <div id="firebaseui-auth-container"></div>;
};
