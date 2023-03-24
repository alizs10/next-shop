/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  return {
    /* config options for all phases except development here */
    env: {
      APP_NAME: "Nike's Shoes Shop",
      DB_NAME: 'nikes_shoes_shop',
      DB_USERNAME: 'alizs10',
      DB_PASSWORD: 'sharrr77a',
      NEXTAUTH_SECRET: 'alizs10_is_the_best_programmer_ever'
    },
    reactStrictMode: true,
  }
}
