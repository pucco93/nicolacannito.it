import { makeStyles } from '@material-ui/core/styles';
import { IPageTitleProps } from './PageTitle';

const useMyStyles = (props: IPageTitleProps) => {
    const useStyles = makeStyles(theme => ({
        '@keyframes highlight': {
            '0%': {
                right: '100%',
                left: 0,
            },
            '50%': {
                right: 0,
                left: 0,
            },
            '100%': {
                right: 0,
                left: '100%',
            }
        },        
        '@keyframes highlightText': {
            from: {
                color: props.theme.backgroundVariant,
            },
            to: {
                color: props.theme.titleColor,
            }
        },
        title: {
            fontSize: 36,
            fontWeight: 600,
            margin: '30px auto',
            padding: '0px 10px',
            position: 'relative',
            width: 'fit-content',
            color: props.theme.backgroundVariant,
            animation: '$highlightText 1s',
            animationDelay: '1s',
            animationIterationCount: 1,
            animationFillMode: 'forwards',
            '&:after': {
                content: '""',
                position: 'absolute',
                zIndex: 0,
                top: 0,
                left: 0,
                right: '100%',
                bottom: 0,
                background: props.theme.titleColor,
                animation: '$highlight 1s',
                animationDelay: '0.5s',
                animationIterationCount: 1
            }
        },
    }));
    return useStyles(props); 
};

export default useMyStyles;