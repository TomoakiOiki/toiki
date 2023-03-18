import { getMemoByFile, getAllMemo } from '../../client/memo';
import Head from 'next/head';
import { markdownToHtml } from '../../client/markdown';
import MemoType from '../../types/memo';

type Props = {
  memo: MemoType;
  preview?: boolean;
};

type Params = {
  params: {
    slug: string;
  };
};

const Post = ({ memo }: Props) => {
  return (
    <>
      <Head>
        <title>{memo.title} | toiki</title>
      </Head>
    </>
  );
};

export default Post;

export const getStaticProps = async ({ params }: Params) => {
  const memo = getMemoByFile(params.slug, ['title', 'date', 'content']);
  const content = await markdownToHtml(memo.content || '');

  return {
    props: {
      memo: {
        ...memo,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const memos = getAllMemo(['slug']);

  return {
    paths: memos.map((memo) => {
      return {
        params: {
          slug: memo.slug,
        },
      };
    }),
    fallback: false,
  };
};
