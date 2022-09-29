import db from "../Utils/firebase";

export default {
  /**
   * this function will be fired when the app is first time run,
   * and it will fetch first 5 posts, here i retrieve them in desc order,
   * until show last added post first.
   */
  postsFirstBatch: async function () {
    try {
      const data = await db
        .collection("clientes")
        .orderBy("telefono" , "desc")
        .limit(5)
        .get();

      let posts = [];
      let lastKey = "";
  data.forEach(  (doc) => {
        
        posts.push({
          postId: doc.id,
          postContent: doc.data()
        });
        lastKey = doc.data().telefono
      });
    
      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last post in previous batch, then fetch next 5 posts
   * starting after last fetched post.  
   */
  postsNextBatch: async (key) => {
    try {
      const data = await db
        .collection("clientes")
        .orderBy("telefono", "desc")
        .startAfter(key)
        .limit(5)
        .get();

      let posts = [];
      let lastKey = "";
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          postContent: doc.data()
          
        });
        lastKey = doc.data().telefono
      });
   
      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  }
};
