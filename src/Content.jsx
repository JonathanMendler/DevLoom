import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { PostsNew } from "./PostsNew";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("https://obscure-tor-85828-6937fb9ee34d.herokuapp.com//posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("https://obscure-tor-85828-6937fb9ee34d.herokuapp.com//posts.json", params).then((response) => {
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
    axios.patch(`https://obscure-tor-85828-6937fb9ee34d.herokuapp.com//posts/${id}.json`, params).then((response) => {
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
    axios.delete(`https://obscure-tor-85828-6937fb9ee34d.herokuapp.com//posts/${post.id}.json`).then((response) => {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DevLoom</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Unraveling the Journey Behind the Code</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <PostsNew onCreatePost={handleCreatePost} />
          <PostsIndex posts={posts} onShowPost={handleShowPost} />
        </div>
      </div>
    </div>
  );
}
