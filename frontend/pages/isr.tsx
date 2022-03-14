import { GetStaticProps, NextPage } from "next";

type IsrPageProps = {
  date: string;
};

const IsrPage: NextPage<IsrPageProps> = (props) => {
  return <div>{props.date}</div>;
};

export const getStaticProps: GetStaticProps<IsrPageProps> = async () => {
  const now = new Date();

  return {
    props: {
      date: now.toISOString(),
    },
    revalidate: 10,
  };
};

export default IsrPage;
