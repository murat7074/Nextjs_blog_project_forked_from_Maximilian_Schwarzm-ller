// HOME PAGE
// http://localhost:3000
// 1. Hero = present ourselves
// 2. featured posts

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head"

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>welcome to my blog</title>
        <meta name="description" content="I post about programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

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
