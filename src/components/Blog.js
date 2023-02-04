import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Render, withContentValidation } from '@9gustin/react-notion-render'
import './styles/Blog.css'
import '@9gustin/react-notion-render/dist/index.css'
import BlogLoading from './BlogLoading'

export default function Blog() {
    const params = useParams();
    const blogId = params.id;
    const [blog, setBlog] = useState();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3001/post/${blogId}`)
            .then((response) => response.json())
            .then((data) => { setBlog(data); setComments(data.comments) });
    }, [blogId, comments])
    function handleInputChange(e) {
        setComment(e.target.value)
    }
    function postComment() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "comments": comments,
            "id": blogId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:3001/comment", requestOptions)
            .then(response => response.json())
            .then(result => { setComment(''); alert("Comment Added") })
    }
    function submit(e) {
        if (e.key == 'Enter' && comment.trim() != '') {
            var tempComments = comments
            tempComments.push({ name: comment.trim() })
            setComments(tempComments)
            postComment()
        }
        else if (e == "click" && comment.trim() != '') {
            var tempComments = comments
            tempComments.push({ name: comment.trim() })
            setComments(tempComments)
            postComment()
        }
    }
    if (blog) {
        return (
            <article>
                <Render blocks={blog.blocks} useStyles classNames emptyBlocks />
                {/* <ReactMarkdown children={blog.markdownText} /> */}
                <div className='commentCont'>
                    <h1 className='commentTitle'>Comments</h1>
                    <input placeholder='add-comment' className='commentInput' type="text" onKeyPress={(e) => submit(e)} onChange={(e) => handleInputChange(e)} value={comment} />
                    <button onClick={() => submit("click")} className='addComment'>submit</button>
                    <div className='comments'>
                        {
                            comments.map((e, i) => {
                                return (
                                    <p key={i} className='comment'>{e.name}</p>
                                )
                            })
                        }
                    </div>
                </div>

            </article>
        )
    }
    else {
        return (<BlogLoading />)
    }

}

