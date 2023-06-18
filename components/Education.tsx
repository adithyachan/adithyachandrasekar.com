import { Container, Center, Title, Flex, Text, Card, Image, Group, Grid, Paper } from "@mantine/core";

export default function Education() {
  return (
    <Container className="mt-20 mb-40 mx-40" fluid>
      <Center className="flex-col">
        <Title className="text-6xl">Education 🎓</Title>
        <Grid className="mt-20">
          <Grid.Col span={6}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
              width={500}
              alt="Purdue University"
              withPlaceholder
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper className="h-full p-20" radius="xl" shadow="xl" withBorder>
              <Flex className="h-full" justify="center" direction="column">
                <Text size="xl" weight={500} className="pb-3">BS/MS Computer Science</Text>
                <Text size="sm" color="dimmed">
                  I'm pursuing an integrated master's in Computer Science. I am also pursuing a bachelor's degree in Data Science. My primary areas of interest include distributed systems, machine learning & deep learning, and networking & security.
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  );
}