import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import PageLayOut from "../../components/pageLayOut/pageLayOut";
import NewsBody from "../../components/newsBody/newsBody";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [postAuthor, setPostAuthor] = useState();
  const [allPost, setAllPost] = useState();
  const [postByView, setPostByView] = useState();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        // console.log(res.data);
        const allPostArr = [...res.data];
        setAllPost(allPostArr);
        const postArr = [...res.data].reverse();
        setPosts(postArr);
        const postByViewArr = [...res.data];
        postByViewArr.sort((a, b) => b.view - a.view);
        setPostByView(postByViewArr);
        const { authorInfo } = res.data[0];
        setPostAuthor(authorInfo);
      } catch (e) {
        throw new Error(e);
      }
    };
    getPost();
  }, []);

  console.log(postByView);

  return (
    <>
      <PageLayOut>
        <NewsBody posts={posts} allPost={allPost} postByView={postByView} postAuthor={postAuthor} />
      </PageLayOut>
    </>
  );
}
