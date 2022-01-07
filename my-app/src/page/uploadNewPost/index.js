import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import jwt from "jwt-decode";
import PageLayOut from "../../components/pageLayOut/pageLayOut";
import "./index.css";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UploadNewPost() {
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

  const token = localStorage.getItem("token");
  const user = jwt(token);
  const id = user.user._id;

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  console.log(file);

  const postNewPost = (e) => {
    const newPost = {
      newTitle,
      newPostContent,
      newPostPreview,
      newPreviewImage,
      userId: id,
    };
    e.preventDefault();
    console.log(newPost);
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

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/user/userinfo`, {
          params: {
            id,
          },
        });
        setCurrentUser(res.data);
        const { clubInfo } = res.data[0];
        setFavClub(res.data[0].clubInfo);
        const { userInfo } = res.data[0];
        setUserPoint([userInfo]);
      } catch (e) {
        throw new Error(e);
      }
    };
    getUser();
  }, []);

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
      <PageLayOut>
        <div className="container">
          <div className="wrapper">
            <div className="user">
              <div className="createPost">Create your new post</div>
            </div>
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
          </div>
          <p>Select Preview Image</p>
          <img src={`http://localhost:3080${newPreviewImage}`} width="300px" height="200px" alt="" />
          <form onSubmit={onSubmit}>
            <input type="file" name="file" id="customFile" onChange={onChange} />
            <input type="Submit" value="Upload" />
          </form>
          <input
            onClick={postNewPost}
            type="Submit"
            className="btn btn-primary px-8"
            width="50px"
            height="20px"
            value="Post"
          />
        </div>
      </PageLayOut>
    </>
  );
}
