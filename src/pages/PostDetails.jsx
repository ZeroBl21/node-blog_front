import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const { user } = useUser()

  useEffect(() => {
    fetch('http://localhost:4000/post/' + id)
      .then((res) => res.json())
      .then((res) => setPost(res.post))
  }, [])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className='post-page'>
      <div className='post-info'>
        <time>
          {new Date(post.createdAt).toLocaleDateString('en-us', {
            dateStyle: 'long'
          })}
        </time>
        <div className='author'> ⟶ {post?.author?.username}</div>
        {user?.userId === post?.author._id
          ? (
          <div className='post-edit'>
            <Link to={`/edit/${post._id}`}>⟶ Edit This Post</Link>
          </div>
            )
          : null}
      </div>
      <div className='image'>
        <img src={`http://localhost:4000/${post.cover}`}></img>
      </div>
      <h1>{post.title}</h1>
      <div
        className='post-content'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default PostDetails
