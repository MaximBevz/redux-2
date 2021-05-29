import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setComments,
    setCommentsIsLoading,
    setCommentsError} from '../../redux';

const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => comments);

    const dispatch = useDispatch();

    const fetchComments = async () => {
        try {
            dispatch(setCommentsIsLoading());

            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await response.json();

            dispatch(setComments(payload));

        } catch (e) {
            dispatch(setCommentsError('Error fetch data'));
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    if(isLoading) {
        return <h1>Loading !!!</h1>
    }


    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h2>{comment.id}. {comment.name} {comment.email}</h2>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Comments;