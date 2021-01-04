import React, { useState, useEffect } from 'react';
import useStyles from './Post.styles';
import * as models from '../..//models/index';
import { Theme } from '../../models/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export interface IPostProps {
    theme: Theme;
    post: models.Post;
}

const Post = (props: IPostProps) => {
    let {
        postContainer,
        infos,
        title,
        date,
        description,
        shareButtons,
        facebook,
        twitter,
        icon,
        round
    } = useStyles(props);

    const _truncateString = (text: string, isTitle: boolean) => {
        let newString: string = '';
        if(isTitle) {
            newString = text.length >= 40 ? `${text.substr(0, 37)}...` : text;
        } else {
            newString = text.length >= 90 ? `${text.substr(0, 90)}...` : text;
        }
        return newString;
    };

    let newDate: string = '';
    let newDescription: string = '';
    let newTitle: string = '';
    if(props.post) {
        if(props.post.date) {
            newDate = new Date(props.post.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
        }
        if(props.post.text) {
            newDescription = _truncateString(props.post.text, false);
        }
        if(props.post.title) {
            newTitle = _truncateString(props.post.title, true);
        }
    }

    return (
        <Link className={ postContainer } to={`/posts/${props.post.id}`} >
            <div className={ shareButtons }>
                <div className={ facebook }>
                    <div className={round}>
                        <FontAwesomeIcon icon={ faFacebookF } className={ icon } />
                    </div>
                </div>
                <div className={ twitter }>
                    <div className={round}>
                        <FontAwesomeIcon icon={ faTwitter } className={ icon } />
                    </div>
                </div>
            </div>
            <div className={ infos }>
                <div className={ title }>
                    { newTitle }
                </div>
                <div className={ date }>
                    { newDate }
                </div>
                <div className={ description }>
                    { newDescription }
                </div>
            </div>
        </Link>
    );
};

export default Post;