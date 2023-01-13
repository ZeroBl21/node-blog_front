import { useEffect, useState } from 'react'

import { useParams, Navigate } from 'react-router-dom'

import { Editor } from '../components'

const initialProps = {
  title: '',
  summary: '',
  content: '',
  file: null
}

const CreatePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(initialProps)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (id) {
      fetch('http://localhost:4000/post/' + id)
        .then((res) => res.json())
        .then((res) => {
          setPost({
            title: res?.post?.title,
            summary: res?.post?.summary,
            content: res?.post?.content,
            file: null
          })
        })
    }
  }, [])

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.set('id', id)
    data.set('title', post.title)
    data.set('summary', post.summary)
    data.set('content', post.content)
    if (post?.file?.[0]) {
      data.set('file', post.file?.[0])
    }

    if (id) {
      fetch('http://localhost:4000/post/' + id, {
        method: 'PUT',
        body: data,
        credentials: 'include'
      }).then((res) => {
        if (res.ok) {
          setRedirect(true)
        }
      })

      return
    }

    fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.post) {
          setRedirect(true)
        }
      })
      .catch((err) => console.error(err))
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />
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
      <input
        type='file'
        onChange={(e) => setPost({ ...post, file: e.target.files })}
      />
      <Editor
        value={post.content}
        onChange={(newValue) => setPost({ ...post, content: newValue })}
      />
      <button style={{ marginTop: '5px' }}>
        {id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  )
}

export default CreatePost
