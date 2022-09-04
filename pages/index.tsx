import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>스트리머 명 - Twip - 트위치 스트리머를 위한 오버레이 도구</title>
        <meta name='description' content='트윕 카피해서 만드는 중' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Nav />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
