import { Box, Flex, Text, Link, Image, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      as="footer"
      backgroundColor="#222"
      color="#fff"
      py={8}
      px={4}
      textAlign="center"
    >
      <Flex
        direction={isDesktop ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Text fontSize="sm">© Copyright Frank Body 2015</Text>
        </Box>

        <Flex direction="column" alignItems="center">
          <Text fontSize="sm">
            Find out more about me.
          </Text>
          <Link href="#" color="#fff">
            Help
          </Link>
          <Link href="#" color="#fff">
            Shipping Costs and Times
          </Link>
          <Link href="#" color="#fff">
            Privacy Policy
          </Link>
          <Link href="#" color="#fff">
            Returns Policy
          </Link>
        </Flex>

        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Text fontSize="sm">Follow me.</Text>
          <Flex gap={2}>
            <Link href="#" color="#fff">
              <Image src="/images/instagram.svg" alt="Instagram" />
            </Link>
            <Link href="#" color="#fff">
              <Image src="/images/facebook.svg" alt="Facebook" />
            </Link>
            <Link href="#" color="#fff">
              <Image src="/images/twitter.svg" alt="Twitter" />
            </Link>
            <Link href="#" color="#fff">
              <Image src="/images/pinterest.svg" alt="Pinterest" />
            </Link>
            <Link href="#" color="#fff">
              <Image src="/images/youtube.svg" alt="YouTube" />
            </Link>
            <Link href="#" color="#fff">
              <Image src="/images/tumblr.svg" alt="Tumblr" />
            </Link>
          </Flex>
          <Text fontSize="xs">
            This site was made with Love & Money. Words by Willow & Blake.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
