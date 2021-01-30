import React, { useState, useEffect, Suspense } from 'react';
import useStyles from './App.styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import BlogSection from '../BlogSection/BlogSection';
import darkTheme from '../theming/DarkTheme';
import defaultTheme from '../theming/DefaultTheme';
import { Theme, Post, Form } from '../models/index';
import * as manager from '../managers/APIManager';
import { UndefinedPost, UndefinedForm, SuccessStatus } from '../Constants/Constants';
import PostPage from '../BlogSection/PostsSection/Post/PostPage/PostPage';
import { useTranslation } from 'react-i18next';


export interface IAppProps {

}

export const App = (props: IAppProps) => {
    const [titleTransition, setTitleTransition] = useState<boolean>(false);
    const [isDarkTheme, changeTheme] = useState<boolean>(false);
    const [isLoading, updateLoading] = useState<boolean>(false);
    const [posts, updatePosts] = useState<Post[]>([]);
    const [currentPost, updateCurrentPost] = useState<Post>(UndefinedPost);
    const [form, updateForm] = useState<Form>(UndefinedForm);
    const [sent, updateSent] = useState<boolean>(false);
    const [error, updateError] = useState<string>('');
    const { t, i18n } = useTranslation();

    let _theme: Theme = isDarkTheme ? darkTheme : defaultTheme;

    let { container } = useStyles(props);

    useEffect(() => {
        setTitleTransition(true);
    }, []);

    const _getPosts = async () => {
        updateLoading(true);
        let posts: Post[] = [];
        posts = await manager.getPosts();
        updateLoading(false);
        updatePosts(posts);
    };

    const _changeTheme = () => {
        changeTheme(previous => !previous);
    };
    
    const _shareOnFacebook = (post: Post | undefined) => {
        
    };

    const _shareOnTwitter = (post: Post | undefined) => {
        
    };

    const _updateCurrentPost = (post: Post) => {
        updateCurrentPost(post);
    };

    const _getCurrentPost = async (id: any) => {
        updateLoading(true);
        let newCurrentPost: Post = UndefinedPost;
        newCurrentPost = await manager.getSinglePost(id);
        updateCurrentPost(newCurrentPost);
        updateLoading(false);
    };

    const _sendForm = async () => {
        updateError('');
        updateLoading(true);
        let mailStatus = await manager.sendMail(form);
        updateLoading(false);
        if(mailStatus === SuccessStatus) {
            updateSent(true);
            updateForm(UndefinedForm);
        } else {
            updateError(t("MailSendingError"));
        }
    };

    const _updateForm = (newForm: Form) => {
        updateForm(newForm);
    };

    const _updateError = (fields: string[]) => {
        let newError = t('FillRequiredFormError');
        fields.forEach((field: string, index: number) => {
            newError += ` ${field.toUpperCase()}${index === fields.length -1 ? '' : ','}`;
        });
        updateError(newError);
    };

    return (
        <Router>
            <div className={container}>
                <Switch>
                    <Route exact path="/">
                        <HomeSection
                            titleTransition={titleTransition}
                            theme={_theme}
                            // t={t}
                        />
                    </Route>
                    <Route exact path="/about" >
                        <AboutSection
                            theme={_theme}
                            changeTheme={_changeTheme}
                            isDarkTheme={isDarkTheme}
                            form={ form }
                            sendForm={ _sendForm }
                            updateForm={ _updateForm }
                            sent={sent}
                            error={error}
                            updateError={_updateError}
                        />
                    </Route>
                    <Route exact path="/blog" >
                        <BlogSection
                            posts={ posts }
                            getPosts={_getPosts}
                            changeTheme={_changeTheme}
                            theme={_theme}
                            isDarkTheme={isDarkTheme}
                            isLoading={isLoading}
                            shareOnTwitter={ _shareOnTwitter } 
                            shareOnFacebook={ _shareOnFacebook }
                            updateCurrentPost={ _updateCurrentPost }
                        />
                    </Route>
                    <Route path={`/posts/:slug`} >
                        <PostPage 
                            theme={ _theme }
                            posts={ posts } 
                            shareOnTwitter={ _shareOnTwitter } 
                            shareOnFacebook={ _shareOnFacebook }
                            isDarkTheme={ isDarkTheme }
                            changeTheme={ _changeTheme }
                            currentPost={ currentPost }
                            getCurrentPost={ _getCurrentPost }
                            isLoading={ isLoading }
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}