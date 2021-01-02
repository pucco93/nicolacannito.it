import React, { useState, useEffect } from 'react';
import useStyles from './AboutSection.styles';
import { Post } from '../models/index';
import Header from '../Header/Header';

export interface IAboutSectionProps {
  getPosts: () => Promise<Post[]>
}

export const AboutSection = (props: IAboutSectionProps) => {
  let { 
    page,
    logo, 
    postsClass 
  } = useStyles(props);

  const [posts, updatePosts] = useState<Post[]>([]);
  const [nextLink, updateNextLink] = useState<string>('');

  const _getPosts = async () => {
    let newPosts: Post[] = [];
    newPosts = await props.getPosts();
    updatePosts(newPosts);
  };

  useEffect(() => {
    _getPosts();
  }, []);

  return(
    <div className={ page }>
      <Header />
      <div className={ logo }>

      </div>
    <div className={ postsClass }>
      { posts.map(post => {
        return <div></div>;
      }) }
    </div>
    </div>
  );
}