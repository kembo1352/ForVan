import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link, useParams, useHistory } from "react-router-dom";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";

export default function EditPostAdmin() {
  const [file, setFile] = useState("");
  const [uploadPreviewImage, setuploadPreviewImage] = useState({});
  const [newPreviewImage, setNewPreviewImage] = useState();
  const [filename, setFilename] = useState();
  const [selectedPost, setSelectedPost] = useState([]);
  const [postId, setPostId] = useState();
  const [title, setTitle] = useState("");
  const [postPreview, setPostPreview] = useState("");
  const [content, setContent] = useState("");
  const [previewImage, setPreviewImage] = useState();
  const { id } = useParams();
  const { history } = useHistory();

  useEffect(() => {
    const getSelectedPost = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/landing/eachpost", {
          params: {
            id,
          },
        });
        setSelectedPost([res.data]);
        setPostId(res.data[0]._id);
        setTitle(res.data[0].title);
        setPostPreview(res.data[0].postPreview);
        setContent(res.data[0].content);
        setPreviewImage(res.data[0].previewImage);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedPost();
  }, []);

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
  const editPost = (e) => {
    e.preventDefault();
    if (newPreviewImage) {
      console.log("haha");
      const newPost = {
        postId,
        newTitle: title,
        newPostPreview: postPreview,
        newContent: content,
        newImagePreview: newPreviewImage,
      };
      axios
        .put("http://localhost:3080/api/post/updatePost", newPost)
        .then((res) => {
          console.log(res);
          history.push("/view-all-post");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!newPreviewImage) {
      const newPost = {
        postId,
        newTitle: title,
        newPostPreview: postPreview,
        newContent: content,
        newImagePreview: previewImage,
      };
      axios
        .put("http://localhost:3080/api/post/updatePost", newPost)
        .then((res) => {
          console.log(res);
          console.log("hoho");
          history.push("/view-all-post");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleCkeditorState = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePostPreviewInputChange = (e) => {
    setPostPreview(e.target.value);
  };
  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit Post</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-post" class="btn btn-success">
                Post List
              </Link>
            </h4>
            <form className="form-group">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleTitleInputChange}
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Post Preview</label>
                <input
                  type="text"
                  name="title"
                  onChange={handlePostPreviewInputChange}
                  value={postPreview}
                  placeholder="Enter Title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Post Content</label>
                <CKEditor
                  data={content}
                  // value={el.content}
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
            {newPreviewImage ? (
              <img src={`http://localhost:3080${newPreviewImage}`} width="300px" height="200px" alt="" />
            ) : (
              <img src={`http://localhost:3080${previewImage}`} width="300px" height="200px" alt="" />
            )}
            <form onSubmit={onSubmit}>
              <input type="file" name="file" id="customFile" onChange={onChange} />
              <input type="Submit" value="Upload" />
            </form>
            <input
              onClick={editPost}
              type="Submit"
              className="btn btn-success px-8"
              width="50px"
              height="20px"
              value="Edit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
