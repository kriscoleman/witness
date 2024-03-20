import { CardGrid, Grid } from '@testifysec/wings';

import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Attest and Verify',
    Svg: require('@site/static/img/undraw_certificate_re_yadi.svg').default,
    description: (
      <>
        Create in-toto attestations for your software supply chains, so you can verify
        who did what and what tools were used.
      </>
    ),
  },
  {
    title: 'Prevent Attacks',
    Svg: require('@site/static/img/undraw_alert_re_j2op.svg').default,
    description: (
      <>
        Detect any potential tampering or malicious activity.
      </>
    ),
  },
  {
    title: 'Create Trust Based Supply Chains',
    Svg: require('@site/static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        Ensure that only authorized users or machines complete each step of the supply chain.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4"> 
          <Svg className="w-56 h-56" role="img" />
        </div>
        <div>
          <Heading as="h3" className="mb-2">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid className='container-x' maxColumns={3}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Grid>
    </section>
  );
}
