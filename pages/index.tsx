import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell } from '@mantine/core'

import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

import Hero from '../components/Hero'
import About from '../components/About'
import PageTimeline from '../components/PageTimeline'



const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Adithya Chandrasekar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell padding={0} header={<PageHeader />} footer={<PageFooter />}>
          <Hero />
          <About />
          <PageTimeline />
        </AppShell>
      </main>
    </>
  )
}

export default Home
