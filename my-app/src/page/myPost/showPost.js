import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./index.css";
import renderHTML from "react-render-html";
import axios from "axios";
import PageLayOut from "../../components/pageLayOut/pageLayOut";

export default function ShowPost() {
  const [selectedPost, setSelectedPost] = useState([]);
  const history = useHistory();

  const { id } = useParams();

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

  console.log(selectedPost);

  const handleOnClickDeletePost = (e) => {
    console.log("asdasd");
    const deletePostId = {
      postId: id,
    };
    console.log(deletePostId);
    axios
      .post("http://localhost:3080/api/post/delete-post", deletePostId)
      .then((res) => console.log(res), history.push("/mypost"));
  };
  return (
    <>
      <PageLayOut>
        <div className="container">
          <div className="user">
            <div className="yourpost">Show Post</div>
          </div>
          <div className="buttonContainer">
            <ul className="button">
              <Link to={`/editPost/${id}`}>
                <li className="li">
                  <input type="button" className="btn btn-primary px-8" width="50px" height="20px" value="Edit" />
                </li>
              </Link>
              <li className="li">
                <input
                  onClick={handleOnClickDeletePost}
                  type="button"
                  className="btn btn-primary px-8"
                  width="50px"
                  height="20px"
                  value="Delete"
                />
              </li>
            </ul>
          </div>
          {selectedPost?.map((el) => (
            <div key={el._id} className="card">
              <div className="card-body">
                <>
                  <div className="title">{el.title}</div>
                  <div className="postPreview">{el.postPreview}</div>
                  <img className="previewImage" src={`http://localhost:3080${el.previewImage}`} alt="" />
                  <div className="...">{renderHTML(el.content)}</div>
                </>
              </div>
            </div>
          ))}
        </div>
      </PageLayOut>
    </>
  );
}
