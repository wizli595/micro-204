import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const ListPost = () => {
    const [posts, setPosts] = useState({});
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3002/posts");
            setPosts(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const list = Object.values(posts);
    return (<>
        {
            list.map(post => {
                return (<PostCard key={post._id} post={post} />);
            })
        }

    </>);
};

export default ListPost;