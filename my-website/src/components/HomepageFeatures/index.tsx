import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/Data+Lake.svg').default,
    description: (
      <>
        Access detailed documentation for Tres Finance's products and services,
        designed to help you integrate and build with ease.
      </>
    ),
  },
  {
    title: 'Secure and Reliable',
    Svg: require('@site/static/img/logo.png').default,
    description: (
      <>
        Built on robust infrastructure with security at its core, ensuring your
        integrations are safe and dependable.
      </>
    ),
  },
  {
    title: 'Partner Ecosystem',
    Svg: require('@site/static/img/Logo+++Partner.svg').default,
    description: (
      <>
        Join our growing ecosystem of partners and developers building the future
        of finance together.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
