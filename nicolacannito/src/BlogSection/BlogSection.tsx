import React, { useState, useEffect } from 'react';
import * as models from '../models/index';
import Header from '../Header/Header';
import Post from './Post/Post';
import PageTitle from '../PageTitle/PageTitle';
import PostsSection from './PostsSection/PostsSection';
import useMyStyles from './BlogSection.styles';

export interface IBlogSectionProps {
    getPosts: () => Promise<models.Post[]>;
    changeTheme: () => void;
    theme: models.Theme;
    isDarkTheme: boolean;
    isLoading: boolean;
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
                    theme={props.theme}
                    getPosts={_getPosts}
                    isLoading={ props.isLoading }
                />
            </div>
        </div>
    );
};

export default BlogSection;