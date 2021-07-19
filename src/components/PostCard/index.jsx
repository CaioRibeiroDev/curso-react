import "./styles.css";

export const PostCard = ({ title, cover, body, id }) => (
  //maneiras de se fazer
  // const post = props.post;
  // const {posts} = props;

  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);
