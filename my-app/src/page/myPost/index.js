import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { Link, useParams } from "react-router-dom";
import PageLayOut from "../../components/pageLayOut/pageLayOut";
import "./index.css";

export default function MyPost() {
  const token = localStorage.getItem("token");
  const user = jwt(token);
  const id = user.user._id;

  const [posts, setPosts] = useState();
  const [userPosts, setUserPosts] = useState();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        // console.log(res.data);
        setPosts(res.data);
        const selectedPost = res.data.filter((post) => post.author === id);
        setUserPosts(selectedPost);
      } catch (e) {
        throw new Error(e);
      }
    };
    getPost();
  }, []);

  console.log(userPosts);

  return (
    <>
      <PageLayOut>
        <div className="container">
          <div className="wrapper">
            <div className="header">
              <div className="user">
                <div className="yourpost">Your Posts</div>
              </div>
            </div>
            <div className="main-body align-self-center justify-content-center">
              <div className="container-fluid">
                {userPosts?.map((el) => (
                  <Link key={el._id} to={`/mypost/${el._id}`}>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="d-flex flex-column align-items-center text-center">
                              <div className="titleShowPage">{el.title}</div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex flex-column align-items-center text-center">
                              <div className="postPreviewShowPage">{el.postPreview}</div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="d-flex flex-column align-items-center text-center">
                              <img
                                width="300px"
                                height="200px"
                                src={`http://localhost:3080${el.previewImage}`}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageLayOut>
    </>
  );
}
