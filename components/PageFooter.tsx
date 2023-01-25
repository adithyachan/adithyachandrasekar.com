import { createStyles, Center, Footer, ActionIcon, Group, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

// const useStyles = createStyles((theme) => ({
//   footer: {
//     borderTop: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[6]
//     }`,
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
//   },
// }));

export default function PageFooter() {
  // const { classes } = useStyles();

  return (
    <Footer height="" className='opacity-80  sm:hover:opacity-100 transition ease-in-out sm:hover:scale-105'>
      <Center  className={`h-14 flex-col justify-evenly align-bottom`}>
        <Button component="a" href="https://github.com/adithyachan/adithyachandrasekar.com" target="_blank" variant="subtle" leftIcon={<IconBrandGithub size={12} />} size="xs" compact>
            Github Repository
        </Button>
        <span className="text-xs">
          © Adithya Chandrasekar 2023
        </span>
      </Center>
    </Footer>
    
  );
}