import { useSession } from 'next-auth/react';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { status } = useSession();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/auth/user-data')
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [status]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
