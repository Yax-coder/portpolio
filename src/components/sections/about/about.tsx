import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { tools } from '../../../assets/icons';
import { AppLink } from '../../AppLink';

import { useScrollReveal } from '../../../hooks';
import './about.scss';

const skills = [
  { name: 'Typescript', icon: tools.typescript },
  { name: 'Javascript', icon: tools.javascript },
  { name: 'React/React Native', icon: tools.react },
  { name: 'NodeJS / NestJS', icon: tools.nodejs },
  { name: 'Postgres (Prisma)', icon: tools.postgres },
  { name: 'GraphQL', icon: tools.graphql },
  { name: 'Redux', icon: tools.redux },
  { name: 'TailwindCSS', icon: tools.tailwind },
  { name: 'CSS(SCSS, Styled-components, emotion)', icon: tools.scss },
  { name: 'HTML', icon: tools.html5 },
  { name: 'Docker', icon: tools.docker },
  { name: 'AWS', icon: tools.aws },
  { name: 'Firebase', icon: tools.firebase },
  { name: 'MongoDB', icon: tools.mongodb },
  { name: 'Webpack', icon: tools.webpack },
  { name: 'Git', icon: tools.git },
  { name: 'Software Testing', icon: tools.jest },
];

export const About: React.FC = () => {
  useScrollReveal({
    selector: '.tools__tool',
    options: { interval: 100 },
  });

  useScrollReveal({
    selector: '.about',
  });

  useScrollReveal({
    selector: '.about__img',
  });

  return (
    <section className="about section" id="about">
      <div className="about__img">
        <StaticImage
          className="about__img--img"
          src="../../../images/me-2026.png"
          alt="Yahya Ahmad"
          width={600}
          formats={['auto', 'avif', 'webp', 'png']}
        />
      </div>

      <div className="about__content">
        <h2 className="about__heading">
          A little <span>About Me</span>
        </h2>
        <p>
          I started Software Development in 2016 as a hobby, just out of
          curiosity after reading that video games are made from computer
          programming.
        </p>
        <p>
          I&apos;ve been working professionally as a Software Engineer for
          over 8 years. I&apos;m currently Chief Technology Officer &amp;
          Co-Founder at{' '}
          <AppLink href="https://lellall.com" clearStyles>
            Lellall
          </AppLink>
          , a B2B procurement platform that centralizes ordering, vendor
          coordination, delivery and settlement for restaurants and hotels
          &mdash; live in Abuja with 7 active clients, 100 verified vendors,
          and &#8358;600M+ in gross transaction value processed. I own our
          architecture and technical decisions, and lead a team of 10 across
          engineering, QA and support.
        </p>
        <p>
          Before that I led digital transformation and payment integrations
          (NIP transfers, wallets, POS) at a microfinance bank, and spent five
          years building the frontend architecture for{' '}
          <AppLink href="http://flexisaf.com/" clearStyles>
            Flexisaf.com™
          </AppLink>
          &apos;s NECO platform, serving 1M+ users nationwide.
        </p>
        <p>Below are some technologies I enjoy working with:</p>
        <ul className="tools">
          {skills.map((skill) => (
            <li key={skill.name} className="tools__tool">
              <span className="tools__tool--icon">{skill.icon}</span>
              <span className="tools__tool--name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
