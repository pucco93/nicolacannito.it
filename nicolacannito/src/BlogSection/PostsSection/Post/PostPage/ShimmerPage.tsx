import React, { useState, useEffect } from 'react';
import useStyles from './ShimmerPage.styles';
import { Theme } from '../../../../models/index';
import Skeleton from '@material-ui/lab/Skeleton';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';

export interface IShimmerPageProps {
    theme: Theme;
    changeTheme: () => void;
    isDarkTheme: boolean;
}

const ShimmerPage = (props: IShimmerPageProps) => {
    let {
        shimmerContainer,
        infoContainer,
        date,
        description,
        bodyImgLeft,
        rightDescription,
        bodyImgRight,
        leftDescription,
        halfDescription
    } = useStyles(props);

    const _changeTheme = () => {
        props.changeTheme();
    };

    let descriptionLines: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let rightDescriptionLines: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
    let leftDescriptionLines: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <Header
                theme={props.theme}
                changeTheme={_changeTheme}
                isDarkTheme={props.isDarkTheme}
            />
            <div className={shimmerContainer}>
                <Skeleton 
                    animation="wave" 
                    variant="rect" 
                    width='100%' 
                    height={ 300 } 
                />
                <div className={ infoContainer }>
                    <Skeleton 
                        animation="wave" 
                        variant="text" 
                        width='15%' 
                        height={24} 
                        className={ date } 
                    />
                    {
                        descriptionLines.map((item: number) => {
                            return(
                                <Skeleton 
                                    animation="wave" 
                                    variant="text" 
                                    width='100%' 
                                    height={18} 
                                    className={ description }
                                />
                            );
                        })
                    }
                    <Skeleton 
                        animation="wave" 
                        variant="rect" 
                        width='40%' 
                        height={ 250 } 
                        className={ bodyImgLeft }
                    />
                    <div className={rightDescription}>
                        {
                            rightDescriptionLines.map((item: number) => {
                                return(
                                    <Skeleton 
                                        animation="wave" 
                                        variant="text" 
                                        width='100%' 
                                        height={18} 
                                        className={ halfDescription }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className={leftDescription}>
                        {
                            leftDescriptionLines.map((item: number) => {
                                return(
                                    <Skeleton 
                                        animation="wave" 
                                        variant="text" 
                                        width='100%' 
                                        height={18}
                                        className={ halfDescription }
                                    />
                                );
                            })
                        }
                    </div>
                    <Skeleton 
                        animation="wave" 
                        variant="rect" 
                        width='40%' 
                        height={ 250 } 
                        className={ bodyImgRight }
                    />
                    {
                        descriptionLines.map((item: number) => {
                            return(
                                <Skeleton 
                                    animation="wave" 
                                    variant="text" 
                                    width='100%' 
                                    height={18} 
                                    className={ description }
                                />
                            );
                        })
                    }
                </div>
            </div>
            <Footer theme={ props.theme } />
        </>
    );
};

export default ShimmerPage;