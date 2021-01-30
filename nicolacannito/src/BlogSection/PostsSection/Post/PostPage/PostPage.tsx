import React, { useState, useEffect } from 'react';
import useStyles from './PostPage.styles';
import * as models from '../../../../models/index';
import { Theme } from '../../../../models/index';
import PageTitle from '../../../../PageTitle/PageTitle';
import { useParams } from 'react-router-dom';
import Header from '../../../../Header/Header';
import { UndefinedPost } from '../../../../Constants/Constants';
import ShimmerPage from './ShimmerPage';
import Footer from '../../../../Footer/Footer';

export interface IPostPageProps {
    theme: Theme;
    posts: models.Post[];
    shareOnFacebook: (PostPage: models.Post | undefined) => void;
    shareOnTwitter: (PostPage: models.Post | undefined) => void;
    getCurrentPost: (id: any) => void;
    changeTheme: () => void;
    isDarkTheme: boolean;
    currentPost: models.Post;
    isLoading: boolean;
}

const PostPage = (props: IPostPageProps) => {
    let {
        backgroungImg,
        postPageTitle,
        blackLayer,
        body,
        date,
        description
    } = useStyles(props);

    const findPostBySlug = (id: any) => {
        return props.posts.find(o => o.id === Number(id));
    };

    let id = useParams(),
    post = findPostBySlug(id);

    const _shareOnFacebook = () => {
        props.shareOnFacebook(post);
    };

    const _shareOnTwitter = () => {
        props.shareOnTwitter(post);
    };

    const _changeTheme = () => {
        props.changeTheme();
    };

    const createMarkup = () => {
        return { __html: props.currentPost.text };
    };

    let newDate: string = '';
    if(props.currentPost?.date) {
        newDate = new Date(props.currentPost.date).toLocaleDateString('it-IT', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }

    let normalPage: JSX.Element =
        <>
            <Header
                theme={props.theme}
                changeTheme={_changeTheme}
                isDarkTheme={props.isDarkTheme}
            />
            <div className={ backgroungImg }>
                <div className={ blackLayer } />
                <div className={ postPageTitle }>
                    <PageTitle
                        title={ props.currentPost.title }
                        theme={props.theme}
                    />
                </div>
            </div>
            <div className={body}>
                <div className={date}>
                    { newDate }
                </div>
                <article className={description} dangerouslySetInnerHTML={ createMarkup() } />
            </div>
            <Footer theme={ props.theme } />
        </>;

    let shimmerPage: JSX.Element = 
        <ShimmerPage 
            theme={ props.theme }
            changeTheme={ _changeTheme }
            isDarkTheme={ props.isDarkTheme }
        />;

    useEffect(() => {
        if(props.currentPost.id === 0 || post === undefined) {
            props.getCurrentPost(id);
        }
    }, []);

    return (
        props.isLoading ? shimmerPage : normalPage
    );
};

export default PostPage;