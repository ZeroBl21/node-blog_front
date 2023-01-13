import { Link } from 'react-router-dom'

const Post = ({ id, title, summary, cover, createdAt, author }) => {
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${id}`}>
          <img src={`http://localhost:4000/${cover}`} alt={summary} />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a className='author'>{author.username}</a>
          <time>{new Date(createdAt).toLocaleString()}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}

export default Post
