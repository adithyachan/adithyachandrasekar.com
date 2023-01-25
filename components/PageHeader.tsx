import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Collapse,
  MediaQuery,
  Stack,
} from '@mantine/core';
import { useDisclosure, useWindowScroll, useIdle } from '@mantine/hooks';
import { IconChevronDown, IconSun, IconMoonStars, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  button: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
    },
  },

  link: {
    display: 'block',
    textAlign: "center",
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  collapse: {
    display: "none"
  },
}));

interface HeaderActionProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function HeaderTemplate({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={classes.link}
        onClick={link.link ? () => {} : (event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  const burgerItems = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={`py-3 ${classes.link}`}
        onClick={link.link ? () => {} : (event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [scroll, scrollTo] = useWindowScroll();
  const idle = useIdle(1000);

  return (
    <Header height="" p="md" className={`shadow-lg transition ease-in-out sm:hover:opacity-100 sm:hover:shadow-2xl ${scroll.y > 150 && !idle ? "opacity-90" : "opacity-0"} duration-500`} fixed>
      <Container className="flex justify-between items-center" fluid>
        <Group className="pl-5">
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          </Group>
          <Group className={classes.links}>
            { items }
          </Group>
        </Group>
        <Group className="pr-5">
          <ActionIcon
            component='a'
            href='https://github.com/adithyachan'
            target="_blank"
            variant="subtle"
            title="Adithya Chandrasekar's Github"
            className='transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl'
          >
            <IconBrandGithub size={24} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://www.instagram.com/adithya.c_/'
            target="_blank"
            variant="subtle"
            color='pink.3'
            title="Adithya Chandrasekar's Instagram"
            className='transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl'
          >
            <IconBrandInstagram size={24} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://www.linkedin.com/in/adithya-chandrasekar/'
            target="_blank"
            variant="subtle"
            color='blue.3'
            title="Adithya Chandrasekar's LinkedIn"
            className='transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-105 duration-300 hover:shadow-xl'
          >
            <IconBrandLinkedin size={24} />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color={dark ? 'yellow' : 'violet.9'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            className='transition ease-in-out sm:delay-10 sm:hover:-translate-y-0.5 sm:hover:scale-105 duration-300 sm:hover:shadow-xl'
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Container>
      <Stack>
        <MediaQuery largerThan="sm" styles={{ display: "none"}}>
          <Collapse in={opened}>
            <Stack mt="xs">
              { burgerItems }
            </Stack>
          </Collapse>
        </MediaQuery>
      </Stack>
    </Header>
  );
}

export default function PageHeader() {
  const header_links = [ {
      link: "#", label: "Blog",
    }, {
      link: "https://github.com/adithyachan", label: "Projects",
    },
  ];

  return (
    <>
      <HeaderTemplate links={header_links} />
    </>
  )
}