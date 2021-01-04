import React, { useState, useEffect } from 'react';
import * as models from '../models/index';
import { Theme } from '../models/index';
import useMyStyles from './PageTitle.styles';

export interface IPageTitleProps {
    title: string;
    theme: Theme;
}

const PageTitle = (props: IPageTitleProps) => {
    let {
        title,
    } = useMyStyles(props);

    return (
        <div className={title}>
            { props.title }
        </div>
    );
};

export default PageTitle;