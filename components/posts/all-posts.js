import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

// sadece posts lar gözükecek yani "Hero" sayfası olmayacak
function AllPosts(props) {

  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
