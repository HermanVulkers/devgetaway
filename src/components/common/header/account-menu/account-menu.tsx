import { Menu, Avatar, UnstyledButton, Loader, Chip } from '@mantine/core';
import { Settings, MessageCircle, Home, Logout } from 'tabler-icons-react';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const AccountMenu = () => {
  const router = useRouter();

  const { data, status } = useSession();
  if (status === 'loading') return <Loader />;

  const userImage = data?.user?.image;
  const userName = data?.user?.name ?? '';

  const handleClick = async () => {
    router.push('/profile');
  };

  return (
    <Menu position="bottom-end" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar alt={userName} src={userImage} radius="xl" />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => {
            handleClick();
          }}
          icon={<Home size={14} />}
        >
          Profile
        </Menu.Item>
        <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
        <Menu.Item
          onClick={() => {
            signOut();
          }}
          icon={<Logout size={14} />}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
