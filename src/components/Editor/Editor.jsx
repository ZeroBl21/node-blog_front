import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image'],
      ['clean']
    ]
  }

  return (
    <div>
      <ReactQuill
        name='content'
        theme='snow'
        modules={modules}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Editor
