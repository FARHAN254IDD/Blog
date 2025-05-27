import {useParams} from 'react-router-dom'
import useFetch from './UseFetch';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const BlogDetails = () => {
    const history = useHistory();

    const {id}= useParams()
    const {data: blog} =useFetch('http://localhost:4000/blogs/' + id);

    const handleSubmit = (e)=> {
        e.preventDefault()

        axios.delete('http://localhost:4000/blogs/' +id)
        .then(res => {
            alert("blog deleted");
            history.push("/");
        })
        .catch(err=> console.log(err.message))
    }

    return (
        <div className="details">
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Done by:{blog.author}</p>
                    <div>{blog.body}</div>
                    <Button onClick={handleSubmit}className="mt-3" variant="danger" type="submit">Delete</Button>

                </article>
            )}
        </div>
    );
}

export default BlogDetails;
