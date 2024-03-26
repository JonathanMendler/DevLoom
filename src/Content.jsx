import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  // const posts = [
  //   { id: 1, date: Date.today, name: "Deep JSX", content: "Let's dive into some advanced JSX!" },
  //   {
  //     id: 2,
  //     date: Date.today,
  //     name: "The Woes of an intermediate dev.",
  //     content: "The emotional yo-yo'ing from superstar to imposter can weigh quite heavily.",
  //   },
  // ];

  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleUpdatePost = (id, params, successCallback) => {
    console.log("handleUpdatePost", params);
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    // <div className="bg-white py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DevLoom</h2>
    //       <p className="mt-2 text-lg leading-8 text-gray-600">Unraveling the Journey Behind the Code</p>
    //     </div>
    //     <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //       {posts.map((post) => (
    //         <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
    //           <div className="flex items-center gap-x-4 text-xs">
    //             <time dateTime={post.datetime} className="text-gray-500">
    //               {post.date}
    //             </time>
    //             <a
    //               href={post.category.href}
    //               className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    //             >
    //               {post.category.title}
    //             </a>
    //           </div>
    //           <div className="group relative">
    //             <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
    //               <a href={post.href}>
    //                 <span className="absolute inset-0" />
    //                 {post.title}
    //               </a>
    //             </h3>
    //             <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
    //           </div>
    //           <div className="relative mt-8 flex items-center gap-x-4">
    //             <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
    //             <div className="text-sm leading-6">
    //               <p className="font-semibold text-gray-900">
    //                 <a href={post.author.href}>
    //                   <span className="absolute inset-0" />
    //                   {post.author.name}
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
