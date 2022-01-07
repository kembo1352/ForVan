import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import renderHTML from "react-render-html";
import { Link, useParams } from "react-router-dom";
import PageLayOutLanding from "../../components/pageLayOutLanding/pageLayOutLanding";

export default function SelectedNewsLanding() {
  const [selectedPost, setSelectedPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postAuthor, setPostAuthor] = useState();
  const [postByView, setPostByView] = useState();

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        // console.log(res.data);
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
      <PageLayOutLanding>
        <div className="container">
          <div className="main-body align-self-center justify-content-center">
            <div className="row">
              <div className="col-lg-2">
                <p className="posttype">Newest Posts</p>
                <div className="card">
                  <div className="card-body">
                    {posts?.map((el) => (
                      <>
                        <Link to={`/${el._id}`}>
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
                            {postAuthor?.map((element) => (
                              <div key={element._id} className="postInfoNewest">
                                {element?.name}
                              </div>
                            ))}
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
                          {postAuthor?.map((element) => (
                            <p key={element._id}>Author: {element?.name}</p>
                          ))}{" "}
                          <span>View: {el?.view}</span>
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
                        <Link to={`/${el._id}`}>
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
                            {postAuthor?.map((element) => (
                              <div key={element._id} className="postInfoNewest">
                                {element?.name}
                              </div>
                            ))}
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
      </PageLayOutLanding>
    </>
  );
}
