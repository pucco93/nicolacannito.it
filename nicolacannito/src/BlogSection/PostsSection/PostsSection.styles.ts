import { makeStyles } from '@material-ui/core/styles';
import { IPostsSectionProps } from './PostsSection';


const useStyles = makeStyles({
    postsClass: (props: IPostsSectionProps) => ({
        display: 'flex',
        flexWrap: 'wrap',
        background: props.theme.backgroundVariant,
        width: '80%',
        padding: '20px 10%'
    }),
    showMore: (props: IPostsSectionProps) => ({
        margin: '20px auto',
        fontSize: 22,
        fontWeight: 600,
        padding: '5px 15px',
        background: `${props.theme.titleColor}99`,
        color: props.theme.backgroundVariant,
        borderRadius: 10,
        transition: 'all 300ms',
        cursor: 'pointer',
        '&:hover': {
            background: props.theme.titleColor,
            transform: 'scale(1.05)'
        }
    }),
});

export default useStyles;