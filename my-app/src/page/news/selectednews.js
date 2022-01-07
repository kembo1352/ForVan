import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import renderHTML from "react-render-html";
import { Link, useParams } from "react-router-dom";
import PageLayOut from "../../components/pageLayOut/pageLayOut";

export default function SelectedNews() {
  const [selectedPost, setSelectedPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postAuthor, setPostAuthor] = useState();
  const [postByView, setPostByView] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        // console.log(res.data);
        setPosts(res.data);
        const { authorInfo } = res.data[0];
        setPostAuthor(authorInfo);
        const postByViewArr = [...res.data];
        postByViewArr.sort((a, b) => b.view - a.view);
        setPostByView(postByViewArr);
      } catch (e) {
        throw new Error(e);
      }
    };
    getPost();
  }, []);

  useEffect(() => {
    const getSelectedPost = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/landing/eachpost", {
          params: {
            id,
          },
        });
        setSelectedPost(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedPost();
  }, [id]);

  return (
    <>
      <PageLayOut>
        <div className="container">
          <div className="main-body align-self-center justify-content-center">
            <div className="row">
              <div className="col-lg-2">
                <p className="posttype">Newest Posts</p>
                <div className="card">
                  <div className="card-body">
                    {posts?.map((el) => (
                      <>
                        <Link to={`/news/${el._id}`}>
                          <input
                            type="image"
                            className="previewImage"
                            key={el.title}
                            src={`http://localhost:3080${el.previewImage}`}
                            alt=""
                          />
                          <div className="posttitle" key={el.title}>
                            {el.title}
                          </div>
                          <div className="postInfoNewestContainer">
                            <div className="postInfoNewest">{el?.authorInfo[0]?.name}</div>
                            <div className="postInfoNewest">View: {el?.view}</div>
                          </div>
                          <hr />
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="posttype">Post</p>
                <div className="card">
                  <div className="card-body">
                    {selectedPost?.map((el) => (
                      <>
                        <div className="title">{el.title}</div>
                        <div className="postPreview">{el.postPreview}</div>
                        <img className="previewImage" src={`http://localhost:3080${el.previewImage}`} alt="" />
                        <div className="...">{renderHTML(el.content)}</div>

                        <div className="postInfo">
                          <p>Author: {el?.authorInfo[0].name}</p> <span>View: {el?.view}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <p className="posttype">Most View Posts</p>
                <div className="card">
                  <div className="card-body">
                    {postByView?.map((el) => (
                      <>
                        <Link to={`/news/${el._id}`}>
                          <input
                            type="image"
                            className="previewImage"
                            key={el.title}
                            src={`http://localhost:3080${el.previewImage}`}
                            alt=""
                          />
                          <div className="posttitle" key={el.title}>
                            {el.title}
                          </div>
                          <div className="postInfoNewestContainer">
                            <div className="postInfoNewest">{el?.authorInfo[0]?.name}</div>
                            <div className="postInfoNewest">View: {el?.view}</div>
                          </div>

                          <hr />
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayOut>
    </>
  );
}
