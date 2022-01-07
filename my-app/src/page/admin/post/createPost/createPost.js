import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useHistory } from "react-router";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./createPost.css";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreatePost() {
  const [file, setFile] = useState("");
  const [favClub, setFavClub] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userPoint, setUserPoint] = useState([]);
  const [filename, setFilename] = useState();
  const [uploadPreviewImage, setuploadPreviewImage] = useState({});
  const [newPreviewImage, setNewPreviewImage] = useState();
  const [newPostContent, setNewPostContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPostPreview, setNewPostPreview] = useState("");

  const history = useHistory();

  const postNewPost = (e) => {
    const newPost = {
      userId: "Admin",
      newTitle,
      newPostContent,
      newPostPreview,
      newPreviewImage,
    };
    e.preventDefault();
    console.log(newPost);
    history.push("/view-all-post");
    axios
      .post("http://localhost:3080/api/post/postNewPost", newPost)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPostFormData = new FormData();
    newPostFormData.append("file", file);

    try {
      const res = await axios.post("http://localhost:3080/api/post/previewimage", newPostFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      console.log(filePath);
      setNewPreviewImage(filePath);
      setuploadPreviewImage({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleCkeditorState = (e, editor) => {
    const data = editor.getData();
    setNewPostContent(data);
  };

  const handleTitleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handlePostPreview = (e) => {
    setNewPostPreview(e.target.value);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ADD POST</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-post" class="btn btn-success">
                Player List
              </Link>
            </h4>
            <form className="form-group">
              <div className="form-group">
                <label>Title</label>
                <input
                  onChange={handleTitleInputChange}
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Post Preview</label>
                <input
                  onChange={handlePostPreview}
                  type="text"
                  name="title"
                  placeholder="Enter Post Preview"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Post Content</label>
                <CKEditor
                  editor={ClassicEditor}
                  onInit={(editor) => {
                    // this inializes our application
                  }}
                  config={{
                    ckfinder: {
                      uploadUrl: "http://localhost:3080/api/post/uploadPostImage",
                    },
                  }}
                  onChange={handleCkeditorState}
                />
              </div>
            </form>
            <p>Select Preview Image</p>
            <img src={`http://localhost:3080${newPreviewImage}`} width="300px" height="200px" alt="" />
            <form onSubmit={onSubmit}>
              <input type="file" name="file" id="customFile" onChange={onChange} />
              <input type="Submit" value="Upload" />
            </form>
            <input
              onClick={postNewPost}
              type="Submit"
              className="btn btn-success"
              width="50px"
              height="20px"
              value="Post"
            />
          </div>
        </div>
      </div>
    </>
  );
}
