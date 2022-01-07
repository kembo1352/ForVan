import React, { useEffect, useState } from "react";
import axios from "axios";
import "./showPost.css";
import renderHTML from "react-render-html";
import { Link, useParams, useHistory } from "react-router-dom";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";

export default function ShowPostAdmin() {
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
  }, []);

  const handleOnClickDeletePost = (e) => {
    console.log("Bye Bitch");
    const deletePostId = {
      postId: id,
    };
    console.log(deletePostId);
    axios
      .post("http://localhost:3080/api/post/delete-post", deletePostId)
      .then((res) => console.log(res), history.push("/view-all-post"));
  };

  console.log(selectedPost);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Post Detail</h3>
          </div>
          <div className="panel-body">
            <div className="buttonContainer">
              <ul className="button">
                <Link to={`/edit-post/${id}`}>
                  <li className="li">
                    <input type="button" className="btn btn-success px-8" width="50px" height="20px" value="Edit" />
                  </li>
                </Link>
                <li className="li">
                  <input
                    onClick={handleOnClickDeletePost}
                    type="button"
                    className="btn btn-success px-8"
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
        </div>
      </div>
    </>
  );
}
