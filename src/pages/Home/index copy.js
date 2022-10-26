import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SerchBar'
import { blogList } from '../../config/data'


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey,setSearchKey] = useState('');

    // Search submit
    const handleSearchSubmit = event=>{
      event.preventDefault();
      handleSearchResults()
    }

    // Search for blogs by category
    const handleSearchResults=()=>{
        const allBlogs=blogList;
        const filterdBlogs = allBlogs.filter((blog)=>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );

        setBlogs(filterdBlogs);
      
    
    }
    const handleClearSearch=()=>{
      setBlogs(blogList);
      setSearchKey('');
    }
  return (
    <div>
      
      {/* Page Header */}
        <Header/>
      {/* Serch Bar */}
        <SearchBar 
        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit} 
        handleSearchKey={(e)=> setSearchKey(e.target.value)}
        />

      {/* Blog List & Empty List */}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home1
