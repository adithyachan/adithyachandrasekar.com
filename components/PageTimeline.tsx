import { Timeline, Text, Container, Title, Flex, Blockquote, Stack } from "@mantine/core";
import { IconSchool, IconBriefcase, IconBuildingSkyscraper, IconBuildingArch, IconDeviceLaptop } from "@tabler/icons";
export default function PageTimeline() {
  return(
  <Container className="mt-20 mb-40">
    <Flex className="flex-col sm:flex-row my-10 mr-10" justify="space-between" align="center">
      <Stack className="max-w-sm">
        <Title className="text-5xl">Timeline</Title>
        <Blockquote cite="–Master Oogway">
          Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.
        </Blockquote>
      </Stack>
      <Timeline active={3} bulletSize={24} lineWidth={2} align="right" mt="lg">
        <Timeline.Item bullet={<IconSchool size={12} />} title="Purdue University">
          <Text color="dimmed" size="sm">Joined Purdue University Computer Science</Text>
          <Text size="xs" mt={4}>May 2021</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBuildingSkyscraper size={12} />} title="Purdue Solutions Consulting">
          <Text color="dimmed" size="sm">Joined Purdue Solutions Consulting</Text>
          <Text size="xs" mt={4}>September 2021</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBriefcase size={12} />} title="Cisco Systems">
          <Text color="dimmed" size="sm">Joined as a Software Engineering Intern</Text>
          <Text size="xs" mt={4}>May 2022</Text>
        </Timeline.Item>

        <Timeline.Item title="Software Saturdays Chair" bullet={<IconDeviceLaptop size={12} />}>
          <Text color="dimmed" size="sm">Began leading Purdue IEEE Software Saturdays</Text>
          <Text size="xs" mt={4}>Summer 2023</Text>
        </Timeline.Item>

        <Timeline.Item title="Expected Graduation" bullet={<IconBuildingArch size={12} />}>
          <Text color="dimmed" size="sm">B.S. Computer Science + B.S. Data Science</Text>
          <Text size="xs" mt={4}>May 2024</Text>
        </Timeline.Item>
      </Timeline>
    </Flex>
  </Container>
  );
}