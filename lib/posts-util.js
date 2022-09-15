import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts"); // 9.A_full_blog_project içindeki "posts" klasörü

// sadece posts dosya isimlerini alıcak
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// 9.A_full_blog_project içindeki "posts" klasörü altındaki getting-started-with-nextjs.md dosyasındaki tüm bilgileri alıcak
export function getAllPosts() {
  // const postFiles = fs.readdirSync(postsDirectory);
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile); // her bir dosyayı getPostData fonksiyonuna gönderiyoruz
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {  // isFeatured true olanları alıcaz
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

export default getAllPosts;

