import '@testifysec/wings/dist/design-system.css'

import { Body, CallToAction, FeaturedHero, FlexContentBlock, FlexContentItem, Footer, GithubSvg, Header, Theme } from '@testifysec/wings'

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
          <FlexContentBlock desktopWidth="3xl">
            <FlexContentItem desktopWidth="1/2">
              <img src="../img/framed-policy-screenshot.png" alt="Policy Screenshot" />
            </FlexContentItem>
            <FlexContentItem>
              <small className="small-subtitle text-indigo-400 dark:text-indigo-200">Witness Policy</small>
                <h3>
                  Compliance as Code
                </h3>
                <p>
                  Witness includes a rego based policy template that allows users to define rules to be enforced. This can significantly reduce the manual compliance workload on security and compliance teams.
                </p>
            </FlexContentItem>
          </FlexContentBlock>
          <FlexContentBlock desktopWidth="2xl">
          <FlexContentItem desktopWidth="2/5">
            <img src="/img/logo.png" alt="Witty, the TestifySec Mascot for Witness the CLI tool" />
          </FlexContentItem>
          <FlexContentItem desktopWidth="3/5">
            <small className="small-subtitle text-indigo-400 dark:text-indigo-200">Witness | Observe</small>

            <h3>Open Source CLI Tool</h3>
            Witness integrates with software build pipeline orchestrators to capture build process telemetry, actively enforce development policies, and generate evidence-based supply chain attestations for software consumers. Witness is a CNCF project.
          </FlexContentItem>
          </FlexContentBlock>

          <FlexContentBlock className="bg-testify-titan-white dark:bg-testify-duke-blue" desktopWidth="2xl" alingX="between" >
            <FlexContentItem desktopWidth="1/2">
              <small className="small-subtitle text-indigo-400 dark:text-indigo-200">Archivista | Manage</small>

              <h3>Open Source Attestation Store</h3>
              Archivista manages storage, retrieval, and retention of software build pipeline attestations and trusted telemetry observed by Witness and facilitates either ad hoc or deploy-time compliance verification. Archivista is also a CNCF project.

            </FlexContentItem>
              <FlexContentItem desktopWidth="2/5">
              <img src="/img/sandy.png" alt="Sandy, the TestifySec Mascot for Archivista the Attestation Store" />
            </FlexContentItem>
          </FlexContentBlock>

          <CallToAction
            bgImage={{ src: "/img/codebg.jpeg", alt: "" }}
            actionImageClassName="w-36"
            actionImage={{ src: "/img/logo.png", alt: "" }}
            title="Join the Community"
            subtitle="We hold regular community meetings and events. Join us to learn more about the project and how you can contribute."
            primaryButton={{ link: "https://calendar.google.com/calendar/embed?src=c_012ea8826eb97a19eaf08f92ae2f0829030e5ec18b8ca7529545baf02b696957%40group.calendar.google.com&ctz=America%2FDetroit", label: "Events Calendar"}}
          />
        </Body>
        <Footer bgImage='/img/codebg.jpeg' logo={Logo} copyrightOwner='The Witness Contributors, Inc. Built with Docusaurus.' navItems={[{label: 'Slack >', link: 'https://slack.cncf.io/'}]} socials={[{ href: 'https://github.com/in-toto/witness', name: 'Github', icon: GithubSvg }]}/>
      </Layout>
    </Theme>
  );
}
