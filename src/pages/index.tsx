import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <header className={ clsx( 'hero hero--primary', styles.heroBanner ) }>
      <div className='container'>
        <h2>
          Хороша аптечка - запорука для збільшення шансів виживання та збереження здоров&apos;я
        </h2>


        <p>Чи бачили ви таке у себе чи у своїх побратимів?</p>

        <div className='container'>
          <div className='row'>
            <div className='col col--6'>
              <div className='col-demo'>6</div>
            </div>
            <div className='col col--6'>
              <div className='col-demo'>6</div>
            </div>
          </div>
        </div>

        <img src='/img/esmarkh.png' alt='' />
        <img src='/img/oldMedpack.png' alt='' />
        <img src='/img/broken.jpeg' alt='' />
        <img src='/img/broken2.jpeg' alt='' />
        <img src='/img/goodVsBad.jpeg' alt='' />

        { /* <h1 className='hero__title'>{ siteConfig.title }</h1> */ }
        { /* <p className='hero__subtitle'>{ siteConfig.tagline }</p> */ }
        <div className={ styles.buttons }>
          <Link
            className='button button--secondary button--lg'
            to='/docs/introduction'
          >
            Як перевірити себе?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Головна'
      description='Medical'
    >
      <HomepageHeader />
      { /* <main>
        <HomepageFeatures />
      </main> */ }
    </Layout>
  );
}
