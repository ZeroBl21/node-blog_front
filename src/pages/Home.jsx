import { useState, useEffect } from 'react'
import { Post } from '../components'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then((res) => res.json())
      .then((res) => setPosts(res.posts))
  }, [])

  return (
    <>
      {posts.length > 0
        ? posts.map((post) => (
            <Post
              key={post._id}
              title={post.title}
              summary={post.summary}
              cover={post.cover}
              createdAt={post.createdAt}
              author={post.author}
            />
        ))
        : null}
    </>
  )
}

export default Home
