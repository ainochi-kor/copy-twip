import styled from '@emotion/styled';

const Body = () => {
  return (
    <Header>
      <TitleText>송이송이백송이</TitleText>
    </Header>
  );
};

export default Body;

const Header = styled.header`
  padding-left: calc(50% - 37.5rem);
  padding-right: calc(50% - 37.5rem);
  padding-top: 4rem;
  padding-bottom: 1rem;
  transition: padding 0.5s ease;
  will-change: padding;
`;

const TitleText = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 0 1rem rgb(0 0 0 / 75%);
  padding: 0.25rem;
`;
