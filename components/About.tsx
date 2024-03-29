import { Container, Center, Title, Flex, Text, Card, Image, Group } from "@mantine/core";

export default function About() {
  return (
    <Container className="mt-20 mb-40" fluid>
      <Center className="flex-col">
          <Title className="text-5xl">About</Title>
          <Flex className="mt-12 flex-wrap" columnGap="lg" rowGap="lg" justify="center">
            <Card shadow="sm" p="lg" radius="lg" w={375} className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
              <Card.Section>
                <Image
                  src="https://www.admissions.purdue.edu/admitted/downloads/wallpaper/1920x1080/Gateway_1920x1080.jpg"
                  height={160}
                  alt="Purdue University"
                  withPlaceholder
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Undergraduate Student</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Adithya is a Computer Science & Data Science major at Purdue University. He has a strong interest in Technical Management Leadership, Data Analytics, and Consulting. He is planning to graduate in 2024 with degrees in Computer Science & Data Science with concentrations in AI/ML and Software Engineering.
              </Text>
            </Card>
            <Card shadow="sm" p="lg" w={375} radius="lg" className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
              <Card.Section>
                <Image
                  src="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"
                  height={160}
                  alt="Code"
                  withPlaceholder
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Software Developer</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Adithya is an avid software developer in his spare time. He enjoys working on his personal projects and learning new technical frameworks. In fact, this website was one of those projects! Adithya is also open to work for Summer 2024 so feel free to reach out if you are hiring.
              </Text>
            </Card>
            <Card shadow="sm" w={375} p="lg" radius="lg" className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
              <Card.Section>
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/63a9be6e13a1ad2ae879ed5a/1672068756603-SB1P30K3ECXROFR00JQO/Group+Photo.jpg?format=1000w"
                  height={160}
                  alt="Mentorship"
                  withPlaceholder
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Leadership</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Adithya is the Director of Engagements at Purdue Solutions Consulting, where he spearheads project acquisition and client relations. Adithya also manages Software Saturdays, a free course for Purdue students teaching different software frameworks every semester.
              </Text>
            </Card>
          </Flex>
      </Center>
    </Container>
  );
}