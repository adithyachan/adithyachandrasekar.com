import type { NextPage } from 'next'
import Head from 'next/head'

import { AppShell } from '@mantine/core'

import PageFooter from '../components/PageFooter'
import Hero from '../components/Hero'
import Education from '../components/Education'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adithya Chandrasekar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell padding={0} footer={<PageFooter />}>
          <Hero />
          <Education />
          {/* <Stats data={data} error={error}/> */}
        </AppShell>
      </main>
    </>
  )
}

export default Home
