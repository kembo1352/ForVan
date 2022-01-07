import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "./page/login/index";
import Pickteam from "./page/pickteam/index";
import signup from "./page/signup/index";
import Tranfer from "./page/tranfer/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./page/profile/index";
import landingPage from "./page/landingPage";
import SelectedNews from "./page/news/selectednews";
import News from "./page/news";
import SelectedNewsLanding from "./page/landingPage/selectedNewsLanding";
import UploadNewPost from "./page/uploadNewPost";
import MyPost from "./page/myPost";
import ShowPost from "./page/myPost/showPost";
import EditPost from "./page/myPost/editPost";
import LoginAdmin from "./page/loginAdmin";
import CreatePlayer from "./page/admin/players/createPlayer/createPlayer";
import ViewAllPlayer from "./page/admin/players/viewAllPlayer";
import ShowPlayer from "./page/admin/players/showPlayer/showPlayer";
import EditPlayer from "./page/admin/players/editPlayer/editPlayer";
import ViewAllUser from "./page/admin/users/viewAllUser";
import EditUser from "./page/admin/users/editUser.js/editUser";
import ShowUser from "./page/admin/users/showUser/showUser";
import CreateUser from "./page/admin/users/createUser/createUser";
import ViewAllPost from "./page/admin/post/viewAllPost";
import CreatePost from "./page/admin/post/createPost/createPost";
import ShowPostAdmin from "./page/admin/post/showPost/showPost";
import EditPostAdmin from "./page/admin/post/editPost/editPost";
import ViewAllClub from "./page/admin/clubs/viewAllClub";
import ShowClub from "./page/admin/clubs/showClub/showClub";
import EditClub from "./page/admin/clubs/editClub/editClub";
import PrivateRoute, { PrivateRouteAdmin } from "./components/ProtectedRoute/protectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/news" component={News} />
        <PrivateRoute exact path="/news/:id" component={SelectedNews} />
        <PrivateRoute exact path="/mypost" component={MyPost} />
        <PrivateRoute exact path="/mypost/:id" component={ShowPost} />
        <PrivateRoute exact path="/editPost/:id" component={EditPost} />
        <PrivateRoute exact path="/tranfer" component={Tranfer} />
        <PrivateRoute exact path="/pickteam" component={Pickteam} />
        <PrivateRoute exact path="/newpost" component={UploadNewPost} />
        <Route path="/login" exact component={login} />
        <Route exact path="/login-admin" component={LoginAdmin} />
        <PrivateRouteAdmin exact path="/view-all-player" component={ViewAllPlayer} />
        <PrivateRouteAdmin exact path="/view-all-player/:id" component={ShowPlayer} />
        <PrivateRouteAdmin exact path="/edit-player/:id" component={EditPlayer} />
        <PrivateRouteAdmin exact path="/create-player" component={CreatePlayer} />
        <PrivateRouteAdmin exact path="/view-all-user" component={ViewAllUser} />
        <PrivateRouteAdmin exact path="/view-all-user/:id" component={ShowUser} />
        <PrivateRouteAdmin exact path="/edit-user/:id" component={EditUser} />
        <PrivateRouteAdmin exact path="/create-user" component={CreateUser} />
        <PrivateRouteAdmin exact path="/view-all-post" component={ViewAllPost} />
        <PrivateRouteAdmin exact path="/create-post" component={CreatePost} />
        <PrivateRouteAdmin exact path="/view-all-post/:id" component={ShowPostAdmin} />
        <PrivateRouteAdmin exact path="/edit-post/:id" component={EditPostAdmin} />
        <PrivateRouteAdmin exact path="/view-all-club" component={ViewAllClub} />
        <PrivateRouteAdmin exact path="/view-all-club/:id" component={ShowClub} />
        <PrivateRouteAdmin exact path="/edit-club/:id" component={EditClub} />
        <Route exact path="/signup" component={signup} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/" component={landingPage} />
        <Route exact path="/:id" component={SelectedNewsLanding} />
      </Switch>
    </Router>
  );
}

export default App;
