import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { DummyPosts } from "../data/data";

export default function CreatePosts() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbImage, setThumbImage] = useState('');

  const postCategories = ['Education', 'Discovery', 'Agriculture', 'Entertainment', 'Music', 'Art', 'Business', 'Investment', 'Fashion', 'Sports', 'Science', 'Weather'];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '+1' }, { 'indent': '-1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handleCreatePost = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: DummyPosts.length + 1,
      Image: thumbImage,
      authorId: 1, // You may replace this with the actual authorId
      category,
      title,
      des: description,
    };

    // Update the DummyPosts state with the new post
    DummyPosts.push(newPost);

    // Clear the form after creating the post
    setTitle('');
    setCategory('Uncategorized');
    setDescription('');
    setThumbImage('');

    // You can also save the DummyPosts array to a database or perform other actions as needed
  };

  return (
    <section className='createPosts'>
      <div className="container form-container createPosts-container">
        <h2>Create Your Post</h2>
        <form onSubmit={handleCreatePost} className='form createPosts-form'>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {postCategories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={value => setDescription(value)} />
          <input type="file" value={thumbImage} onChange={(e) => setThumbImage(e.target.value)} accept="png, jpg, jpeg" />
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </section>
  );
}




// import { useState } from "react"
// // React Quill...............
// import ReactQuill from "react-quill"
// import 'react-quill/dist/quill.snow.css'

// export default function CreatePosts() {

//   const [title, setTitle]= useState() 
//   const [category, setCategory]= useState('Uncategorized') 
//   const [description, setDescription]= useState('') 
//   const [thumbImage, setthumbImage]= useState('') 
  
//   // post categories.................
//   const postCategories = ['Education','Discovery','Agreculture','Entertainment','Music','Art','Business','Investment','Fashion','Sports','Science','Weather'];

//   // Modules.........................
//   const modules ={
//     toolbar: [
//       [{'header' : [1,2,3,4,5,6,false]}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'},{'indent': '+1'},{'indent': '-1'}],
//       ['link', 'image'],
//       ['clean']
//     ]
//   }

//     // Formats.........................
//     const formats =[
//       'header',
//       'bold', 'italic', 'underline', 'strike', 'blockquote',
//       'list', 'bullet', 'indent',
//       'link', 'image'
//     ]

//   return (
//     <section className='createPosts'>
//       <div className="container form-container createPosts-container">
//       <h2>Create Your Post</h2>
//         <form action="" className='form createPosts-form'>
//           {/* <p className="form-message">This is the invalid message</p>   */}
//           <input type="text " placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus /> 
//           <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
//             {
//               postCategories.map(cat => <option key={cat}>{cat}</option>)
//             }
//           </select>  
//               <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)}  />
//           <input type="file"  value={thumbImage} onChange={e => setthumbImage(e.target.value)} accept="png, jpg, jpeg" />    
//           <button type="submit" className="btn btn-primary">Create</button>  
//         </form>
//       </div>
//     </section>
//   )
// }
