import styled from '@emotion/styled';

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <SettingZone>
        <Language>KR</Language>
        <Login>로그인</Login>
      </SettingZone>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  width: 100vw;
  height: 4rem;
  padding-left: calc(50% - 37.5rem);
  padding-right: calc(50% - 37.5rem);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 0.25em rgb(0 0 0 / 50%);
  z-index: 69182;
  transition: margin-top 0.5s ease;
`;

const Logo = styled.div`
  background: url(https://assets.mytwip.net/images/logo/v2/TWIP-BI-Signature.svg) no-repeat center;
  margin: 0 0.625rem;
  padding: 0;
  display: inline-block;
  width: 5rem;
  height: 100%;
  background-size: contain;
`;

const SettingZone = styled.div`
  display: inline-flex;
  align-items: stretch;
  height: 100%;
`;

const Language = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.625rem 0.75rem;
  color: #000;
  height: 100%;
  line-height: 3rem;
`;

const Login = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.625rem 0.75rem;
  color: #000;
  height: 100%;
  line-height: 3rem;
`;
