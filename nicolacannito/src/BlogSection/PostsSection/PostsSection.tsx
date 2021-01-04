import React, { useState, useEffect } from 'react';
import * as models from '../../models/index';
import Post from '../Post/Post';
import ShimmerPost from '../Post/ShimmerPost';
import useStyles from './PostsSection.styles';

export interface IPostsSectionProps {
  theme: models.Theme;
  isLoading: boolean;
  getPosts: () => Promise<models.Post[]>;
}

const PostsSection = (props: IPostsSectionProps) => {
    let {
        postsClass,
        showMore,
    } = useStyles(props);
    let shimmersNumber = [0, 1, 2, 3, 4, 5];

    const [posts, updatePosts] = useState<models.Post[]>([]);
    const [isShowMore, updateShowMore] = useState<boolean>(false);
    // const [nextLink, updateNextLink] = useState<string>(''); reserved for real implementation, if there are more than x element from the API call it's better to show x elements and display a show more button which will add more elements to the page.

    const _getPosts = async () => {
        let newPosts: models.Post[] = [];
        newPosts = await props.getPosts();
        updatePosts(newPosts);
    };

    useEffect(() => {
        _getPosts();
    }, []);

    let shimmers: JSX.Element[] = 
        shimmersNumber.map(shimmer => {
            return(
                <ShimmerPost theme={ props.theme } />
            );
        });

    let items: JSX.Element[] = 
        isShowMore ? posts.map((post: models.Post, slug: number) => {
            return(
                <Post 
                    theme={props.theme} 
                    post={post}
                />
            );
        })
        : posts.splice(0, 6).map((post: models.Post, slug: number) => {
            return(
                <Post 
                    theme={props.theme} 
                    post={post}
                />
            );
        });

    const _showMoreClick = () => {
        updateShowMore(true);
    }

    return (
        <div className={postsClass}>
            { props.isLoading ? shimmers : items }
            <div className={ showMore } onClick={ _showMoreClick }>Show more</div>
        </div>
    );
};

export default PostsSection;