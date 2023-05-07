import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const House = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
  background-color: aliceblue;
  padding: 30px;
  row-gap: 10px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  padding: 30px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
`;

export const FormSections = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DatePickers = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
