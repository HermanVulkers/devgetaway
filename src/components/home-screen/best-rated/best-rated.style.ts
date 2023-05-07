import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  width: fit-content;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background-color: #a8dadc;
  padding: 15px;
  border-radius: 5px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 0.9rem;
`;

export const Location = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const AdditionDate = styled.span`
  font-size: 0.8rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.span`
  font-size: 1rem;
  margin-right: 0.25rem;
`;
