import { PostsIndex } from "./PostsIndex";

export function Content() {
  const posts = [
    { id: 1, date: Date.today, name: "Deep JSX", content: "Let's dive into some advanced JSX!" },
    {
      id: 2,
      date: Date.today,
      name: "The Woes of an intermediate dev.",
      content: "The emotional yo-yo'ing from superstar to imposter can weigh quite heavily.",
    },
  ];

  return (
    <div>
      <PostsIndex posts={posts} />
    </div>
  );
}
