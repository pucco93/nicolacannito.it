import { makeStyles } from '@material-ui/core/styles';
import { IBlogSectionProps } from './BlogSection';


const useStyles = makeStyles({
    page:{
        width: '100%',
    },
    pageBody: (props: IBlogSectionProps) => ({
        background: props.theme.backgroundVariant,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 46
    })
});

export default useStyles;