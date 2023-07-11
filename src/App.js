import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import  React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
let postToggle = true;
function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My first post',
      content: 'This is my first post with more content inside',
      image: null,
    },
    {
      id: 2,
      title: 'My Second Post',
      content: 'second post',
      image: null
    }
  ]);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="container">
      <Header addPostToggle={addPostToggle}/>
      <Posts posts={posts}
        setPosts={setPosts}
      addPost={addPost}/>
      <Footer />
    </div>
  );
}

const addPostToggle = () => {
  postToggle = !postToggle;
}

export default App;
