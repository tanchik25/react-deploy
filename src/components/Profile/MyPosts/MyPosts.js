import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post}
                                                   likesCount={p.likesCount}
                                                   icon={p.img}
                                                   key={p.id}/>).reverse()

    /* let newPostElement = React.createRef();

     let addPost = () => {
         props.addPost();
     }
     let onPostChange = () => {
         let text = newPostElement.current.value;
         props.updateNewPostText(text);
     }*/

    return (
        <div className="my_posts">
            <div className="form">
                <h1>My posts</h1>
                <AddNewPostForm addPost={props.addPost}/>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;