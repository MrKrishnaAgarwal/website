import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'How it works?';
const LINK_NAME = 'Read quick start guide';
const CARDS = [
  {
    title: 'Create template',
    description:
      'Select channels, add content with {{dynamic}} syntax, and custom rules to control the delivery of notifications.',
    image: <StaticImage className="w-full" src="./images/template.png" alt="" loading="lazy" />,
  },
  {
    title: 'Connect providers',
    description:
      "Use a built in collection of popular providers - Sendgrid, Mailgun, Twilio and many more. Add API key and you're ready to go.",
    image: <StaticImage className="w-full" src="./images/providers.png" alt="" loading="lazy" />,
  },
  {
    title: 'Add trigger',
    description:
      "Send an event trigger using one of our community built SDK's, and we will handle it from there.",
    image: <StaticImage className="w-full" src="./images/trigger.png" alt="" loading="lazy" />,
  },
];

const HowItWorks = () => (
  <section className="how-it-works safe-paddings bg-black pt-20 pb-28">
    <div className="container flex flex-col items-center">
      <Heading size="md" tag="h2" className="max-w-[764px] text-center leading-tight sm:text-3xl">
        {TITLE}
      </Heading>
      <Link className="mt-7 sm:mt-5 sm:text-xs" to="/" theme="primary-underline" size="sm">
        {LINK_NAME}
      </Link>

      <div className="mt-10 grid grid-cols-3 gap-x-10 lg:block lg:gap-x-0 lg:space-y-7">
        {CARDS.map(({ title, description, image }, index) => (
          <div
            className="rounded-[20px] bg-card-gradient p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-7 md:gap-x-5 sm:block"
            key={index}
          >
            {image}
            <div className="mt-14 lg:mt-0 sm:mt-10">
              <Heading className="leading-snug text-white sm:text-2xl" tag="h3" size="md">
                {title}
              </Heading>
              <p className="mt-3 font-light leading-snug text-gray-8 sm:mt-2.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
