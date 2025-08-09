import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { PostList } from "../store/postListContext.jsx";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card Cards" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin2Fill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {Number(post.reactions)} people.
        </div>
      </div>
    </div>
  );
};

export default Post;

