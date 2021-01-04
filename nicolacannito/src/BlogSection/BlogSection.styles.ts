import { makeStyles } from '@material-ui/core/styles';
import { IBlogSectionProps } from './BlogSection';


const useStyles = makeStyles({
    page:{
        width: '100%',
    },
    postsClass: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    pageBody: (props: IBlogSectionProps) => ({
        background: props.theme.backgroundVariant,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    })
});

export default useStyles;