import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate.jsx";

const CommentList = ({comments}) => {

    // const [comments, setComments] = useState("")
    //
    // const fetchData = async () => {
    //     const res = await axios.get(`http://127.0.0.1:4001/posts/${postId}/comments`);
    //     setComments(res.data)
    // }
    //
    // useEffect(() => {
    //     fetchData()
    // }, []);

    const renderedComments = Object.values(comments).map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return <ul>{renderedComments}</ul>
}
export default CommentList