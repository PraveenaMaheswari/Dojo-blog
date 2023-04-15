import {useState} from 'react';

const Home = () => { 
    const[blogs,setBlogs]=useState([
        {title:'The webpage', body:'The webpage i have developed...', author:'Praveena',id:1},
        {title:'Techieguy', body:'The story of getting...', author:'Pranesh',id:2},
        {title:'History', body:'Boring life has sucked me...', author:'Vinoth',id:3}
    ]);
    return ( 
    <div className="home">
     {blogs.map((blog) =>(
        <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        </div>
     ))}  
        
        
    </div>
     );
}
 
export default Home;