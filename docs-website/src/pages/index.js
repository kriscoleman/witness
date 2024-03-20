import '@testifysec/wings/dist/design-system.css'

import { Body, FeaturedHero, Footer, GithubSvg, Header, Theme } from '@testifysec/wings'

import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const Logo = 
    <a href="/" className="flex justify-center items-center">
      <img className="w-16" src='img/logo.png' />
      <div className='pl-2 text-base font-medium leading-6 selected:text-testify-blue selected:dark:text-white hover:text-testify-blue dark:hover:text-testify-orange text-testify-medieval dark:text-white border-testify-orange'>Witness</div>
    </a>;
  
  return (
    <Theme>
      <Layout
        title={`Welcome to the Witness Project!`}
        description="Generate in-toto attestations anywhere in your supply chain with Witness">
        <Header componentType={Link} actionButtonHref='https://github.com/in-toto/witness' actionButtonLabel='Github' logo={Logo} navItems={[{label: "About", link: "/docs"}, {label: "Tutorials", link: "docs/docs/tutorials/getting-started"} , {label: "Concepts", link: "/docs/docs/tutorials/getting-started"}]} />
        <Body>
          <FeaturedHero image="/img/logo.svg" title={siteConfig.title} paragraph={siteConfig.tagline} button={{label: "Get Started! 🦉", link: "/docs/docs/tutorials/getting-started"}}  />
          <HomepageFeatures />
        </Body>
        <Footer bgImage='/img/codebg.jpeg' logo={Logo} copyrightOwner='The Witness Contributors, Inc. Built with Docusaurus.' navItems={[{label: 'Slack >', link: 'https://slack.cncf.io/'}]} socials={[{ href: 'https://github.com/testifysec', name: 'Github', icon: GithubSvg }]}/>
      </Layout>
    </Theme>
  );
}
