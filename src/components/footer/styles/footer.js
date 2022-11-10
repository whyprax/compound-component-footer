import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: red;
    transition: 200ms ease-in;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
