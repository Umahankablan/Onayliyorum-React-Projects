import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Navbar from "./navbar_component";
import Footer from "./footer_component";
import Login from "./login_component";
import SignUp from "./signup_component";
import NotFoundTag from "./404_notfound_component";
import ContactPage from "./contact_component";
import AboutUsPage from "./hakkimizda_component";
import AskedQuestion from "./sorulan_sorular";
import BlogPage from "./blog_component";

function App() {
  return (
    <Router>
      <div className="container">
        {/* navbar */}
        <Navbar></Navbar>
        {/* navbar end */}
        <main style={{ minHeight: "60vh" }}>


          <Routes>
            <Route path="/" element={<div></div>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="*" element={<NotFoundTag></NotFoundTag>}></Route>
            <Route
              path="/iletisim"
              element={<ContactPage></ContactPage>}
            ></Route>
            <Route path="/hakkimizda" element={<AboutUsPage></AboutUsPage>}></Route>
            <Route path="/sikca-sorulan-sorular" element={<AskedQuestion></AskedQuestion>}>

            </Route>


            <Route path="/blog" element={<BlogPage></BlogPage>}>

            </Route>
          </Routes>




        </main>
        {/* CONTENTS */}
      </div>
      {/* Footer */}
      {/* Footer */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
