import React from "react";
import { Routes, Route} from "react-router-dom";

// Components
import Home from "./Component/home/Home";
import Login from "./Component/login/Login";
import News from "./Component/news/News";
import Signup from "./Component/signup/Signup";
import Blog from "./Component/blog/Blog";
import NavBar from "./Component/navbar/NavBar.jsx";
import CreateBlog from "./Component/blog/createblog/CreateBlog";
import Footer from "./Component/footer/Footer";
import Logout from "./Component/logout/Logout";
import PrivateRoutes from "./utils/PrivateRoutes";
import BlogDetail from "./Component/blog/blogdetail/BlogDetail";
import UserBlog from "./Component/blog/userblog/UserBlog";
import UpdateBlog from "./Component/blog/updateblog/UpdateBlog";

//Static Pages
import ArticleOne from "./Component/home/articles/articlespages/ArticleOne.jsx"
import ArticleTwo from "./Component/home/articles/articlespages/ArticleTwo"
import PageNotFound from "./Component/not found/PageNotFound";



//PRIVATE ROUTE

function App() {
  const apikey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* PrivateRoutes */}
        <Route element={<PrivateRoutes />}>
          <Route exact path="/createblog" element={<CreateBlog />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route exact path="/updateblog/:id" element={<UpdateBlog />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route exact path="/user/posts" element={<UserBlog />} />
        </Route>

        <Route exact path="/details/:id" element={<BlogDetail />} />
        <Route exact path="/logout" element={<Logout />} />
        {/* Static Pages of Articles */}
        <Route exact path="/articles/understanding-construction-drawings" element={  <ArticleOne/>} />
        <Route exact path="/articles/the-best-architecture-magazines" element={  <ArticleTwo/>} />
        <Route exact path="/*" element={<PageNotFound/>}/>
                
      </Routes>
      <Footer />
    
      
    </div>
  );
}

export default App;
