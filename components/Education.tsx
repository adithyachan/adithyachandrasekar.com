import { Container, Center, Title, Flex, Text, Card, Image, Group, Grid, Paper, Timeline, List } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export default function Education(props: { scrollTarget: any }) {
  return (
    <Container className="mt-20 mb-40 mx-40" fluid>
      <Center className="flex-col">
        <Flex justify="center" align="center" className="space-x-5">
          <Title className="text-6xl" ref={props.scrollTarget}>Education 🎓</Title>
        </Flex>
        <Grid className="mt-20 w-full">
          <Grid.Col span={6}>
            <Flex align="center" className="space-x-20">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
                width={300}
                alt="Purdue University"
                withPlaceholder
              />
              <Center>
                <Timeline color="gray" bulletSize={30}>
                  <Timeline.Item 
                    title="Joined Purdue University"
                    bullet={<IconCheck />}
                    active
                  >
                    <small>August 2021</small>
                  </Timeline.Item>
                  <Timeline.Item
                    title="Added major in Data Science"
                    bullet={<IconCheck />}
                    active
                  >
                    <small>Jan 2022</small>
                  </Timeline.Item>
                  <Timeline.Item
                    title="Added MS in Computer Science"
                    bullet={<IconCheck />}
                    active
                  >
                    <small>May 2023</small>
                  </Timeline.Item>
                  <Timeline.Item
                    title="BS Graduation"
                  >
                    <small>May 2024</small>
                  </Timeline.Item>
                  <Timeline.Item
                    title="MS Graduation"
                  >
                    <small>May 2025</small>
                  </Timeline.Item>
                </Timeline>
              </Center>
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <Title order={3}>Relevant Courses</Title>
            <small className="italic">(Note: 500 level classes refer to post-graduate courses)</small>
            <Grid className="m-3">
              <Grid.Col span={4}>
                <Title order={4}>Fall 2021</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS180: Java Programming</List.Item>
                  <List.Item>MA162: Calculus II</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Spring 2022</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS240: C Programming</List.Item>
                  <List.Item>CS182: Discrete Math</List.Item>
                  <List.Item>CS38003: Python Programming</List.Item>
                  <List.Item>MA162: Calculus III</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Summer 2022</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS251: Data Structures & Algorithms</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Fall 2022</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS250: Computer Architecture</List.Item>
                  <List.Item>CS242: Introduction to Data Science</List.Item>
                  <List.Item>MA351: Elementary Linear Algebra</List.Item>
                  <List.Item>STAT355: Statistics for Data Science</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Spring 2023</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS252: Systems Programming</List.Item>
                  <List.Item>CS307: Software Engineering</List.Item>
                  <List.Item>CS373: Data Mining & ML</List.Item>
                  <List.Item>STAT406: Probability Theory</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Fall 2023</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS502: Compilers</List.Item>
                  <List.Item>CS481: Artifcial Intelligence</List.Item>
                  <List.Item>CS408: Software Testing</List.Item>
                  <List.Item>STAT407: Statistical Inference</List.Item>
                  <List.Item>STAT506: Programming for Statistics</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Spring 2024</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS580: Algorithms</List.Item>
                  <List.Item>CS590: VR/AR</List.Item>
                  <List.Item>CS407: SWE Senior Projct</List.Item>
                  <List.Item>CS490: Data Science Capstone</List.Item>
                  <List.Item>STAT440: Large Scale Data Analytics</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Fall 2024</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS503: Operating Systems</List.Item>
                  <List.Item>CS505: Distributed Systems</List.Item>
                  <List.Item>CS573: Data Mining</List.Item>
                  <List.Item>CS577: Natural Language Processing</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={4}>
                <Title order={4}>Sring 2025</Title>
                <List type="unordered" size="sm">
                  <List.Item>CS525: Parallel Computing</List.Item>
                  <List.Item>CS578: Statistical Machine Learning</List.Item>
                  <List.Item>CS527: Software Security</List.Item>
                  <List.Item>CS528: Network Security</List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  );
}