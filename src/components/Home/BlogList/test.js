import React from 'react'

const Bloglist1 = ({blogs}) => {
  <div className='blogList-wrap'>
        {blogs.map((blog)=>(
            <BlogItem blog = {blog} key ={blog.id}/>
        ))}
  </div>
}

export default Bloglist1
