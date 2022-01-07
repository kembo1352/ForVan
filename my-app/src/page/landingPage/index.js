import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import PageLayOutLanding from "../../components/pageLayOutLanding/pageLayOutLanding";
import NewsBodyLanding from "../../components/newsBody/newsBodyLanding";
import { auth } from "../../helpers/helper";

export default function landingPage() {
  const [posts, setPosts] = useState([]);
  const [allPost, setAllPost] = useState();
  const [postAuthor, setPostAuthor] = useState();
  const [postByView, setPostByView] = useState();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        console.log(res.data);
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

  // console.log(auth.isAutheticate);
  console.log(posts);

  return (
    <>
      <PageLayOutLanding>
        <NewsBodyLanding posts={posts} allPost={allPost} postByView={postByView} postAuthor={postAuthor} />
      </PageLayOutLanding>
    </>
  );
}
