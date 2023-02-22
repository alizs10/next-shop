import Head from 'next/head'
import React from 'react'

function AboutPage() {
    return (
        <>
            <Head>
                <title>
                    About Nike
                </title>
                <meta name="description" content="about nike" />
            </Head>
            <div className='relative w-full px-20 pt-24 self-center'>

                <h1 className='w-full text-center text-3xl font-bold'>About Nike</h1>
                <p className='px-44 mt-10 text-xl leading-9 text-justify'>
                    The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide.
                </p>
            </div>
        </>
    )
}


export function getStaticProps() {
    return {
        props: {
            layoutType: "app"
        }
    }
}

export default AboutPage