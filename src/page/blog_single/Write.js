import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Write = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Navbar />
      <div className="app">
        <div className="home">
          <div className="add">
            <div className="content">
              <input type="text" placeholder="Title" />
              <div className="editorContainer">
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </div>
            </div>
            <div className="menu">
              <div className="item">
                <h1>Publish</h1>
                <span>
                  <b>Status</b> Draft
                </span>
                <span>
                  <b>Visibility</b> Public
                </span>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  name=""
                  id="file"
                />
                <label htmlFor="file">Upload Image</label>
                <div className="buttons">
                  <button>Save as a draf</button>
                  <button>Update</button>
                </div>
              </div>
              <div className="item">
                <h1>Category</h1>
                <input type="radio" name="cat" value="art" id="art" />
                <label htmlFor="art">Art</label>
                <input type="radio" name="cat" value="science" id="art" />
                <label htmlFor="art">Science</label>
                <input type="radio" name="cat" value="technology" id="art" />
                <label htmlFor="art">Technology</label>
                <input type="radio" name="cat" value="cinema" id="art" />
                <label htmlFor="art">Cinema</label>
                <input type="radio" name="cat" value="design" id="art" />
                <label htmlFor="art">Design</label>
                <input type="radio" name="cat" value="food" id="art" />
                <label htmlFor="art">food</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Write;
