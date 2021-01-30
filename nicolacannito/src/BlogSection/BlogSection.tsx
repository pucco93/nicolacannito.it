import React, { useState, useEffect } from 'react';
import * as models from '../models/index';
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle';
import PostsSection from './PostsSection/PostsSection';
import useMyStyles from './BlogSection.styles';
import Footer from '../Footer/Footer';

export interface IBlogSectionProps {
    posts: models.Post[];
    getPosts: () => void;
    changeTheme: () => void;
    theme: models.Theme;
    isDarkTheme: boolean;
    isLoading: boolean;
    shareOnFacebook: (post: models.Post) => void;
    shareOnTwitter: (post: models.Post) => void;
    updateCurrentPost: (post: models.Post) => void;
}

const BlogSection = (props: IBlogSectionProps) => {
    let {
        page,
        pageBody
    } = useMyStyles(props);

    const _changeTheme = () => {
        props.changeTheme();
    };

    const _getPosts = async () => {
        return await props.getPosts();
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

    return (
        <div className={page}>
            <Header
                theme={props.theme}
                changeTheme={_changeTheme}
                isDarkTheme={props.isDarkTheme}
            />
            <div className={pageBody}>
                <PageTitle
                    title="Blog"
                    theme={props.theme}
                />
                <PostsSection
                    posts={ props.posts }
                    theme={props.theme}
                    getPosts={_getPosts}
                    isLoading={ props.isLoading }
                    shareOnFacebook={ _shareOnFacebook }
                    shareOnTwitter={ _shareOnTwitter }
                    updateCurrentPost={ _updateCurrentPost }
                />
            </div>
            <Footer theme={ props.theme } />
        </div>
    );
};

export default BlogSection;