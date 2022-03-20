import { Box, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PulldownMenu from "../components/PulldownMenu";

const BreadCrumb: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const breadcrumb = pathname.split("/");
  return (
    <Box marginLeft="15%" marginTop="2%">
      <Link href="/" fontSize="xl" marginRight="12px" _hover={{ textDecoration: "none" }}>
        toiki
      </Link>
      {pathname !== "/" && (
        <>
          <Text display="inline-block" color="gray" marginRight="12px">
            /
          </Text>
          <Link href={breadcrumb[1]} fontSize="xl" _hover={{ textDecoration: "none" }} marginRight="8px">
            {breadcrumb[1]}
          </Link>
        </>
      )}
      <PulldownMenu />
    </Box>
  );
};

export default BreadCrumb;
