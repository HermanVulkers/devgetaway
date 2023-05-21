import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #f1faee;
  padding: 0 20px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const NavigationItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
`;

export const AccountMenu = styled.div`
  display: flex;
  align-items: center;
`;
