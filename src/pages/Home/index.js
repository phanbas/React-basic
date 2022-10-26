import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SerchBar'
import { blogList } from '../../config/data'


const Home = () => {
 console.log(blogList)
  return (
    <div>
      
      {/* Blog List & Empty List */}
      <BlogList blogs={blogList}/>
    </div>
  )
}

export default Home


