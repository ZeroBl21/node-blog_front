const Post = ({ title, summary, cover, createdAt, author }) => {
  return (
    <div className='post'>
      <div className='image'>
        <img src={`http://localhost:4000/${cover}`} alt={summary} />
      </div>
      <div className='texts'>
        <h2>{title}</h2>
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
