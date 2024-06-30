import {
  Center,
  Flex,
  ActionIcon,
  Footer,
  Grid,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons";

export default function PageFooter() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";

  return (
    <Footer height="" id="page-footer">
      <Grid className="py-1">
        <Grid.Col span={3}>
          <Flex className="pl-5 h-full" align="center">
            <ActionIcon
              id="linkedin-link"
              component="a"
              href="https://www.linkedin.com/in/adithya-chandrasekar/"
              target="_blank"
              variant="subtle"
              color="blue.3"
              title="Adithya Chandrasekar's LinkedIn"
              className="transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl"
            >
              <IconBrandLinkedin size={24} />
            </ActionIcon>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center className={`h-14 flex-col justify-evenly align-bottom`}>
            <Button
              id="github-repo-link"
              component="a"
              href="https://github.com/adithyachan/adithyachandrasekar.com"
              target="_blank"
              variant="subtle"
              leftIcon={<IconBrandGithub size={12} />}
              size="xs"
              compact
            >
              Github Repository
            </Button>
            <span id="copyright" className="text-xs">
              © Adithya Chandrasekar 2023
            </span>
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Flex className="pr-5 h-full" align="center" justify="end">
            <ActionIcon
              id="github-profile-link"
              component="a"
              href="https://github.com/adithyachan"
              target="_blank"
              variant="subtle"
              title="Adithya Chandrasekar's Github"
              className="mr-1 transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl"
            >
              <IconBrandGithub size={24} />
            </ActionIcon>
            <ActionIcon
              id="color-scheme-toggle"
              variant="subtle"
              color={dark ? "yellow" : "violet.9"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              className="transition ease-in-out sm:delay-10 sm:hover:-translate-y-0.5 sm:hover:scale-105 duration-300 sm:hover:shadow-xl"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Flex>
        </Grid.Col>
      </Grid>
    </Footer>
  );
}
