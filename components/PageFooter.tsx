import { Center, Footer, Button } from '@mantine/core';
import { useViewportSize, useWindowScroll, useIdle } from '@mantine/hooks';
import { IconBrandGithub } from '@tabler/icons';

export default function PageFooter() {
  const [scroll, scrollTo] = useWindowScroll();
  const { height, width } = useViewportSize();
  const idle = useIdle(1000);

  return (
    <Footer height="" className={`sm:hover:blur-none transition ease-in-out sm:hover:opacity-100 sm:hover:scale-105 ${scroll.y > 150 && !idle ? "opacity-90" : "opacity-0 blur-md"} duration-500`}>
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