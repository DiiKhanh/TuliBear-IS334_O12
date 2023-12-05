import { Helmet } from "react-helmet-async";
import BlogView from "~/sections/blog/BlogView";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title> Blog | TuliBear </title>
      </Helmet>
      <BlogView />
    </>
  );
};

export default BlogPage;