import { useState } from 'react'
import { Editor } from '../components'

const initialProps = {
  title: '',
  summary: '',
  content: ''
}

const CreatePost = () => {
  const [post, setPost] = useState(initialProps)

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.set('title', post.title)

    fetch('http://localhost:4000/post', {
      method: 'POST',
      body: 'test',
      credentials: true
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        placeholder='Title'
        value={post.title}
        onChange={handleChange}
      />
      <input
        name='summary'
        placeholder='Summary'
        value={post.summary}
        onChange={handleChange}
      />
      <input type='file' onChange={(e) => setPost({ ...post, file: e.target.files })} />
      <Editor
        value={post.content}
        onChange={(newValue) => setPost({ ...post, content: newValue })}
      />
      <button style={{ marginTop: '5px' }}>CreatePost</button>
    </form>
  )
}

export default CreatePost
