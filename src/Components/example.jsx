import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from "../services/Post";
import Cards from '../Components/Cards/Cards'
import "./example.css"
export default function App() {
  const [posts, setPosts] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [nextPosts_loading, setNextPostsLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);


  useEffect(() => {
    // first 5 posts
    Post.postsFirstBatch()
      .then((res) => {
        console.log(res)
        setPosts(res.posts);
        setLastKey(res.lastKey);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(posts)
  }, []);

  /**
   * used to apply pagination on posts
   * @param {String} key
   * @return next batch of posts (+5 posts)
   * will be fired when user click on 'More Posts' button.
   */
  const fetchMorePosts = (key) => {
    if (key.length > 0) {
      setNextPostsLoading(true);
      Post.postsNextBatch(key)
        .then((res) => {
          if(res) {
            setLastKey(res.lastKey);
            setPosts(posts.concat(res.posts));
            setNextPostsLoading(false);
          }
          
        })
        
        .catch((err) => {
          console.log(err);
          setNextPostsLoading(false);
        });
        sethasMore(false);
    }
  };




  window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    fetchMorePosts(lastKey)
    this.oldScroll = this.scrollY;
  }

 

  return (
    <div className="App">

  
        <h2>Infinite scroll in Firebase(firestore) and React.js</h2>
        <p>
          You can find the code explanation{" "}
          <a href="https://dev.to/hadi/infinite-scroll-in-firebase-firestore-and-react-js-55g3">
            here
          </a>
        </p>



        <div className="tableList">


{posts.map((post) => {
  return (
    <Cards
      nombre={post.postContent.nombre ? post.postContent.nombre : <p>No data</p>}
      razon_social={post.postContent.razon_social ? post.postContent.razon_social : <p>-</p>}
      nit={post.postContent.nit ? post.postContent.nit : <p>-</p>}
      telefono={post.postContent.telefono ? post.postContent.telefono : <p>NO DATA</p>}
      codigo={post.postContent.codigo ? post.postContent.codigo : <p>-</p>}
      key={post.postContent.telefono}
    >
    </Cards>


  );
})}
        </div>




        <div style={{ textAlign: "center" }}>
          {nextPosts_loading ? (
            <p>Loading..</p>
          ) : lastKey.length > 0 ? ( ""


          ) : (
            <span>You are up to date!</span>
          )}
        </div>
      
    </div >
  );
}
