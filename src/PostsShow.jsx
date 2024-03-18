export function PostsShow(props) {
  return (
    <div>
      <h1>Post Information</h1>
      <p>Title: {props.post.title}</p>
      <p>Content: {props.post.content}</p>
    </div>
  );
}
