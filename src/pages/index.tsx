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
              <img src='/img/esmarkh.png' alt='' />
            </div>
            <div className='col col--6'>
              <img src='/img/oldMedpack.png' alt='' />
            </div>
          </div>
        </div>

        <p>
          Неякісні та застарілі засоби індивідуального захисту - величезна загроза.
          Вони дають хибне відчуття безпеки.
          І в самий критичний момент можуть вартувати найдорожчого.
        </p>

        <div className='container'>
          <div className='row'>
            <div className='col col--6'>
              <img src='/img/broken.jpeg' alt='' />
            </div>
            <div className='col col--6'>
              <img src='/img/broken2.jpeg' alt='' />
            </div>
          </div>
        </div>

        <p>
          Та навіть маючи в руках щось, що має виглядає справжнім, необхідно знати
          як пересвідчитись в якості власного спорядження
        </p>

        <img src='/img/goodVsBad.jpeg' alt='' />


        <p>
          Тому якщо ви хочете максимально убезпечити себе та не довіряти своє життя та здоров&apos;я випадку
        </p>

        <div className={ styles.buttons }>
          <Link
            className='button button--secondary button--lg'
            to='/docs/introduction'
          >
            Перевірте себе
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
