import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import * as Styled from './account-buttons.style';

export const AccountButtons = () => {
    const router = useRouter();

    const handleClick = async () => {
        router.push('/authentication');
    };

    return (
        <Styled.Container>
            <Styled.Button
                onClick={() => {
                    handleClick();
                }}
            >
                Sign In
            </Styled.Button>
        </Styled.Container>
    );
};
