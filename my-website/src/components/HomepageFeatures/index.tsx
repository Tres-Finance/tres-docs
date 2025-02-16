import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Documentation',
    imgSrc: '/img/Data+Lake.svg',
    description: (
      <>
        Access detailed documentation for Tres Finance's products and services,
        designed to help you integrate and build with ease.
      </>
    ),
  },
  {
    title: 'Secure and Reliable',
    imgSrc: '/img/Triangle.png',
    description: (
      <>
        Built on robust infrastructure with security at its core, ensuring your
        integrations are safe and dependable.
      </>
    ),
  },
  {
    title: 'Partner Ecosystem',
    imgSrc: '/img/Logo+++Partner.svg',
    description: (
      <>
        Join our growing ecosystem of partners and developers building the future
        of finance together.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  const imageUrl = useBaseUrl(imgSrc);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
