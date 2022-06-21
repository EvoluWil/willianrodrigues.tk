import Head from 'next/head';
import { GetStaticProps } from 'next';
import { About } from '../components/sections/index-sections/about-section.component';
import { Hero } from '../components/sections/index-sections/hero-section.component';
import { translate } from '../utils/translate.util';

const Index = () => {
  return (
    <>
      <Head>
        <title>{translate('home.title')} | Willian Rodrigues</title>
      </Head>
      <Hero />
      <About />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7 // 7 dias
  };
};
