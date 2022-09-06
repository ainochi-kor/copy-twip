import styled from '@emotion/styled';
import { color } from '@mui/system';

const Footer = () => {
  return (
    <Wrapper>
      <nav>
        <Target target='_blank' href='/pages/policy'>
          이용약관
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          개인정보처리방침
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          저작권 보호센터
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy' style={{ color: '##ffe13b' }}>
          인재 채용 중!
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          기능 제안
        </Target>
        <Wall>|</Wall>
        <Target target='_blank' href='/pages/policy'>
          고객 센터
        </Target>
      </nav>
      <Desc>
        Twip은 Twitch의 Third-Party 사이트로, Twitch에서 운영하는 사이트가 아닙니다.
        <br />
        "Twitch"는 Twitch Interactive, Inc. 의 등록 상표입니다.
        <br />
        <span style={{ fontSize: '12px' }}>
          <Target2 target='_blank' href='https://www.youtube.com/terms' rel='noreferrer'>
            YouTube API Terms Of Services
          </Target2>
          <Wall>|</Wall>
          <Target2 target='_blank' href='https://policies.google.com/privacy'>
            Google Privacy Policy
          </Target2>
          <Wall>|</Wall>
          <Target2 target='_blank' href='https://security.google.com/settings/security/permissions'>
            Revoke Google Account Access
          </Target2>
        </span>
      </Desc>
      <br />
      <Desc>
        (주)이제이엔 | 서울특별시 강남구 테헤란로 504 해성빌딩 8층 | 대표 박찬제
        <br />
        사업자등록번호 : 780-86-00298호 | 통신판매업 신고번호 : 제2018-서울강남-02476호 | E-mail :
        twip@ejn.gg| 전화 : 1600-8340
      </Desc>
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

const Target2 = styled.a`
  color: #ccc;
`;

const Wall = styled.span`
  color: #ccc;
  margin: 0 5px;
`;

const Desc = styled.a`
  line-height: 1.75em;
`;
