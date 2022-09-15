// dosyanın [slug] ismini [...slug] ile karıştırma
// [slug] = http://localhost:3000/ilkterim
// [...slug] = http://localhost:3000//ilkterim/ikinciterim

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head"

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>

  )
}

// slug dan tıklanan post u alıcaz
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// slug dan tıklanan post u sadece "getStaticProps" ile alamayız. "getStaticPaths" ı da kullanmalıyız
export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;


