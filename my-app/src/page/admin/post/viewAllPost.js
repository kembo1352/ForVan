import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiPlusMedical } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./viewAllPost.css";
import NavBarAdmin from "../../../components/sideMenuAdmin/NavBar";

export default function ViewAllPost() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/landing/posts`);
        // console.log(res.data);
        setPosts(res.data);
        console.log(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getPost();
  }, []);

  console.log(posts);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <Link to="/create-post">
          <button type="button" className="btn btn-success">
            Add Post
          </button>
        </Link>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Title</th>
              <th scope="col">Post Preview</th>
              <th scope="col">Preview Image</th>
            </tr>
          </thead>
          {posts?.map((el) => (
            <tbody key={el?.name}>
              <tr
                className="onClick"
                onClick={() => {
                  history.push(`/view-all-post/${el._id}`);
                }}
              >
                {el.authorInfo[0] ? <td>{el?.authorInfo[0]?.name}</td> : <td>{el?.author}</td>}
                <td>{el?.title}</td>
                <td>{el?.postPreview}</td>
                <td>
                  <img src={`http://localhost:3080${el?.previewImage}`} alt="" width="240px" height="180px" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
