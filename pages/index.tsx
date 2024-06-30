import type { NextPage } from "next";
import Head from "next/head";

import { AppShell } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

import PageFooter from "@/components/PageFooter";
import Hero from "@/components/Hero";
import Education from "@/components/Education";

const Home: NextPage = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
  return (
    <>
      <Head>
        <title>Adithya Chandrasekar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell padding={0} footer={<PageFooter />}>
          <Hero scroll={scrollIntoView} />
          <Education scrollTarget={targetRef} />
          {/* <Stats data={data} error={error}/> */}
        </AppShell>
      </main>
    </>
  );
};

export default Home;
