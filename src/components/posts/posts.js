import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setPosts,
    setPostsIsLoading,
    setPostsError} from '../../redux';

const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);

    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch(setPostsIsLoading());

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();

            dispatch(setPosts(payload));
        } catch (e) {
            dispatch(setPostsError('Error fetch data'));
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if(isLoading) {
        return <h1>Loading !!!</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;