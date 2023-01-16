import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{ siteTitle }</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hi, I'm <b>Adithya</b>! I am a college sophomore studying <b>Computer Science</b> at <b>Purdue University</b>. This website is still under construction. Expect to see big changes in the near future!</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                    </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}