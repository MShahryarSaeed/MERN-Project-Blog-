import Navbar from "./Components/Navbar";
import Home from "./pages/Home"; 
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/articles-list" element={<ArticleList/>}/>
        <Route path="/article/:name" element={<Article/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
