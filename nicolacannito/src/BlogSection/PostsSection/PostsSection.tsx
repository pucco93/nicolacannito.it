import React, { useState, useEffect } from 'react';
import * as models from '../../models/index';
import Post from '../PostsSection/Post/Post';
import ShimmerPost from '../PostsSection/Post/ShimmerPost';
import useStyles from './PostsSection.styles';

export interface IPostsSectionProps {
    posts: models.Post[];
    theme: models.Theme;
    isLoading: boolean;
    getPosts: () => void;
    shareOnFacebook: (post: models.Post) => void;
    shareOnTwitter: (post: models.Post) => void;
    updateCurrentPost: (post: models.Post) => void;
}

const PostsSection = (props: IPostsSectionProps) => {
    let {
        postsClass,
        showMore,
    } = useStyles(props);
    let shimmersNumber = [0, 1, 2, 3, 4, 5];

    const [isShowMore, updateShowMore] = useState<boolean>(false);
    // const [nextLink, updateNextLink] = useState<string>(''); reserved for real implementation, if there are more than x element from the API call it's better to show x elements and display a show more button which will add more elements to the page.

    const _getPosts = () => {
        props.getPosts();
    };

    const _shareOnFacebook = (post: models.Post) => {
        props.shareOnFacebook(post);
    };

    const _shareOnTwitter = (post: models.Post) => {
        props.shareOnTwitter(post);
    };
    
    const _updateCurrentPost = (post: models.Post) => {
        props.updateCurrentPost(post);
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
        isShowMore ? [...props.posts].map((post: models.Post, slug: number) => {
            return(
                <Post 
                    theme={props.theme} 
                    post={post}
                    shareOnFacebook={ _shareOnFacebook }
                    shareOnTwitter={ _shareOnTwitter }
                    updateCurrentPost={ _updateCurrentPost }
                />
            );
        })
        : [...props.posts].splice(0, 6).map((post: models.Post, slug: number) => {
            return(
                <Post 
                    theme={props.theme} 
                    post={post}
                    shareOnFacebook={ _shareOnFacebook }
                    shareOnTwitter={ _shareOnTwitter }
                    updateCurrentPost={ _updateCurrentPost }
                />
            );
        });

    const _showMoreClick = () => {
        updateShowMore(true);
    }

    return (
        <div className={postsClass}>
            { props.isLoading ? shimmers : items }
            <div 
                className={ showMore } 
                style={{ display: isShowMore ? 'none' : 'block' }} 
                onClick={ _showMoreClick }
            >
                Show more
            </div>
        </div>
    );
};

export default PostsSection;