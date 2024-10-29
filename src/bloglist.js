import {Link} from 'react-router-dom';
const BlogList = (props) => {

const blogs = props.blogs;
const title = props.title;

    return ( 
        <div className="blog-List">
            <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="preview" key={blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                   <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                </Link>
            </div>

        ))}
        </div>
     );
}
 
export default BlogList;