/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  return {
    /* config options for all phases except development here */
    env: {
      APP_URL: "localhost:3000",
      APP_NAME: "Nike's Shoes Shop",
      DB_NAME: 'nikes_shoes_shop',
      DB_USERNAME: 'alizs10',
      DB_PASSWORD: 'sharrr77a',
      NEXTAUTH_SECRET: 'alizs10_is_the_best_programmer_ever',
      NODEMAILER_USER: 'nikeshoeshopnoreplay@gmail.com',
      NODEMAILER_PASS: 'fztqioazawrficpw',
      REDIS_URL: 'redis://default:2686b18fcd2c404db36e2d1f6843e069@apn1-steady-macaque-35070.upstash.io:35070',
    },
    reactStrictMode: true,
  }
}
