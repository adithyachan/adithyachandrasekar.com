import {
  Center,
  Flex,
  ActionIcon,
  Footer,
  Grid,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import { useWindowScroll, useIdle } from "@mantine/hooks";
import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons";

export default function PageFooter() {
  const [scroll, _] = useWindowScroll();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const idle = useIdle(1000);
  const dark = colorScheme === "dark";

  return (
    <Footer
      height=""
      className={`transition ease-in-out ${scroll.y > 150 && !idle ? "opacity-100" : "hidden blur-md"} duration-500`}
    >
      <Grid className="py-1">
        <Grid.Col span={3}>
          <Flex className="pl-5 h-full" align="center">
            <ActionIcon
              component="a"
              href="https://www.instagram.com/adithya.c_/"
              target="_blank"
              variant="subtle"
              color="pink.3"
              title="Adithya Chandrasekar's Instagram"
              className="mr-1 transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl"
            >
              <IconBrandInstagram size={24} />
            </ActionIcon>
            <ActionIcon
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
            <span className="text-xs">© Adithya Chandrasekar 2023</span>
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Flex className="pr-5 h-full" align="center" justify="end">
            <ActionIcon
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
