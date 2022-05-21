import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { components, remarkPlugins } from "../libs/mdx";
import { getAllPostIds, getPostData } from "../libs/posts";
import { serialize } from "next-mdx-remote/serialize";

const PostPage = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <h1>{postData.id}</h1>
      <MDXRemote {...postData.content} components={components} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  postData.content = await serialize(postData.content, {
    components,
    mdxOptions: {
      remarkPlugins,
    },
  });
  return {
    props: {
      postData,
    },
  };
};

export default PostPage;
