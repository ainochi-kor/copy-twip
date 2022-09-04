import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Wrapper>
      <nav>
        <Target target='_blank' href='/pages/policy'>
          이용약관
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          이용약관
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          이용약관
        </Target>
        <Wall>|</Wall>
      </nav>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding-left: calc(50% - 37.5rem);
  padding-right: calc(50% - 37.5rem);
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: #eee;
  background: #1e1527;
`;

const Target = styled.a`
  color: #fff;
`;

const Wall = styled.span`
  color: #ccc;
  margin: 0 5px;
`;
