import { Container, Center, Title, Flex, Text, Card, Image, Group } from "@mantine/core";

export default function About() {
  return (
    <Container className="my-20" fluid>
      <Center className="flex-col">
          <Title className="text-5xl">About</Title>
          <Flex className="mt-12 flex-col lg:flex-row" columnGap="lg" rowGap="lg" justify="evenly">
            <Card shadow="sm" p="lg" radius="md" className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
              <Card.Section>
                <Image
                  src="https://www.admissions.purdue.edu/admitted/downloads/wallpaper/1920x1080/Gateway_1920x1080.jpg"
                  height={160}
                  alt="Purdue University"
                  withPlaceholder
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>College Sophomore</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Adithya is a Computer Science & Data Science major at Purdue University. He has a strong interest in Technical Management Leadership, Data Analytics, and Consulting.
              </Text>
            </Card>
            <Card shadow="sm" p="lg" radius="md" className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
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
                As many Computer Science majors are, Adithya is also an avid software developer in his spare time. He enjoys working on his personal projects and learning new technical frameworks in his spare time.
              </Text>
            </Card>
            <Card shadow="sm" p="lg" radius="md" className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl" withBorder>
              <Card.Section>
                <Image
                  src="https://www.securityindustry.org/wp-content/uploads/2020/12/TIME-mentor-2.jpg"
                  height={160}
                  alt="Mentorship"
                  withPlaceholder
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Leadership</Text>
              </Group>
              <Text size="sm" color="dimmed">
                Adithya leads many organizations within Purdue University. He is Director of Engagements for Purdue Solutions Consulting, where he spearheads project acquisition and oversees the conception of new projects.
              </Text>
            </Card>
          </Flex>
      </Center>
    </Container>
  );
}