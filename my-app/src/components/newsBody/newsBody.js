import React from "react";
import { Link, useParams } from "react-router-dom";
import Schedule from "../schedule/schedule";

export default function NewsBody(props) {
  const { posts, postAuthor, postByView, allPost } = props;

  const { id } = useParams();
  console.log(id);

  console.log(posts);

  return (
    <>
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
                        <div key={el.title} className="posttitle">
                          {el?.title}
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
              <p className="posttype">Most View Posts</p>
              {postByView?.map((el) => (
                <Link key={el._id} to={`/news/${el._id}`}>
                  <div key={el._id} className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4">
                          <img className="previewImage" src={`http://localhost:3080${el.previewImage}`} alt="" />
                        </div>
                        <div className="col-lg-8">
                          <div className="posttitle" key={el.title}>
                            {el.title}
                          </div>
                          <div className="postpreview">{el.postPreview}</div>
                        </div>
                        <div className="postInfoAllNewsContainer">
                          <p>Author: {el?.authorInfo[0]?.name}</p>
                          <span>View: {el?.view}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-lg-4">
              <p className="posttype">All Posts</p>
              <div className="card">
                <div className="card-body">
                  {allPost?.map((el) => (
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
    </>
  );
}
