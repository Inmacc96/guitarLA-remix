import Post from "./post";

const PostsList = ({ posts }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>

      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </>
  );
};

export default PostsList;
