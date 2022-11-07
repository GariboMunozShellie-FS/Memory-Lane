
import Article from "./components/Article";
import Header from "./components/Header";
import PostApis from "./components/post/articles/PostApis";
import PostCurd from "./components/post/articles/PostCurd";
import PostMongoDB from "./components/post/articles/PostMongoDB";
import PostReact from "./components/post/articles/PostReact";
import Footer from "./components/Footer";
import { Router,Routes, Route } from "react-router-dom";

function App() {
    return (
      <article style={styles.app}>
        <Header/>
        <section style={styles.main}>
          <Routes>
            <Route path="/" element= {<Article/>} />
            <Route path="/home" element= {<Article/>} />
            <Route path="/apis" element={<PostApis/>} />
            <Route path="/react" element={<PostReact/>} />
            <Route path="/curd" element={<PostCurd/>} />
            <Route path="/mongodb" element={<PostMongoDB/>} />
          </Routes>
        </section>
        <Footer/>
      </article>
    );
  }

export default App;

const styles = {
  app: {
    background:"#9eb09f",
  },
  main: {
    paddingTop:"50px",
  },
}


