import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import PageLayOutLanding from "../pageLayOutLanding/pageLayOutLanding";

export default function Post() {
  const [selectedPost, setSelectedPost] = useState([]);
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        console.log(res.data);
        setPosts(res.data);
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
        setSelectedPost([res.data]);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedPost();
  }, [id]);

  console.log(selectedPost);

  return (
    <>
      <PageLayOutLanding>
        <div className="container">
          <div className="main-body align-self-center justify-content-center">
            <div className="row">
              <div className="col-lg-2">
                <div className="card">
                  <div className="card-body">
                    {posts?.map((el) => (
                      <>
                        <Link to={`/post/${el._id}`}>
                          <input type="image" className="previewImage" key={el.title} src={el.previewImage} alt="" />
                          <div key={el.title}>{el.title}</div>
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    {selectedPost?.map((el) => (
                      <>
                        <div className="title">{el.title}</div>
                        <div className="postPreview">{el.postPreview}</div>
                        <img className="previewImage" src={el.previewImage} alt="" />
                        <div>{el.content}</div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    {posts?.map((el) => (
                      <>
                        <Link to={`/news/${el._id}`}>
                          <input type="image" className="previewImage" key={el.title} src={el.previewImage} alt="" />
                          <div key={el.title}>{el.title}</div>
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
