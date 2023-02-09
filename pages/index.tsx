import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell } from '@mantine/core'

import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

import Hero from '../components/Hero'
import About from '../components/About'
import PageTimeline from '../components/PageTimeline'
// import Stats from '../components/Stats'

import useSWR from "swr"
import { GraphQLClient } from 'graphql-request'

const Home: NextPage = () => {
  const endpoint = 'https://api.github.com/graphql'
  const graphQLClient = new GraphQLClient(endpoint, {
    //@ts-ignore
    headers: {
      authorization: `token ${process.env.apiGithub}`,
    },
  })
  const fetcher = (query:string) => graphQLClient.request(query)

  const { data, error } = useSWR(
    `query {
      user(login: "adithyachan") {
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          contributionCalendar {
            totalContributions
            months {
              totalWeeks
            }
            weeks {
              firstDay
              contributionDays {
                contributionCount
              }
            }
          }
        }
      }
    }`, 
  fetcher
  );

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
          {/* <PageTimeline />
          <Stats data={data} error={error}/> */}
        </AppShell>
      </main>
    </>
  )
}

export default Home
