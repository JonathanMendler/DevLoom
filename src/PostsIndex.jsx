export function PostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <h3>{post.date}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
