export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h1>Post Information</h1>
      <p>Title: {props.post.title}</p>
      <p>Content: {props.post.content}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Content: <input defaultValue={props.post.content} name="content" type="text" />
        </div>
        <button type="submit">Update post</button>
      </form>
      <button onClick={handleClick}>Destroy post</button>
    </div>
  );
}
