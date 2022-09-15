import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head"

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
          <meta name="description" content="A list of all programming-related tutorials" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  )
  
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting-Started-With-Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a React fremework for productions",
//     date:"2022-02-10",
//   },
//     {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting-Started-With-Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a React fremework for productions",
//     date:"2022-02-10",
//   },
//     {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting-Started-With-Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a React fremework for productions",
//     date:"2022-02-10",
//   },
//     {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting-Started-With-Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "Nextjs is a React fremework for productions",
//     date:"2022-02-10",
//   },
// ];
