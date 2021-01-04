import React, { useState, useEffect } from 'react';
import useStyles from './ShimmerPost.styles';
import { Theme } from '../../models/index';
import Skeleton from '@material-ui/lab/Skeleton';

export interface IShimmerPostProps {
    theme: Theme;
}

const ShimmerPost = (props: IShimmerPostProps) => {
    let {
        shimmerContainer,
        img
    } = useStyles(props);

    return (
        <div className={shimmerContainer}>
            <Skeleton animation="wave" variant="rect" width='100%' height={ 250 } className={ img }/>
            <Skeleton animation="wave" variant="text" width='90%' height={22} />
            <Skeleton animation="wave" variant="text" width='30%' height={18} />
            <Skeleton animation="wave" variant="text" width='100%' height={14} />
            <Skeleton animation="wave" variant="text" width='100%' height={14} />
            <Skeleton animation="wave" variant="text" width='100%' height={14} />
        </div>

    );
};

export default ShimmerPost;