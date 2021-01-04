import { makeStyles } from '@material-ui/core/styles';
import { IHeaderProps } from './Header';

const headerStyles = makeStyles({
    headerBar: (props: IHeaderProps) => ({
        width: '97%',
        paddingRight: '3%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        background: props.theme.titleColor,
    }),
    pages: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    homeLink: (props: IHeaderProps) => ({
        textDecoration: 'none',
        color: props.theme.backgroundVariant,
        margin: '10px 20px',
        transition: 'all 300ms',
        fontSize: 22,
        '&:hover': {
            color: props.theme.tertiaryColor
        }
    }),
    aboutLink: (props: IHeaderProps) => ({
        textDecoration: 'none',
        color: props.theme.backgroundVariant,
        margin: '10px 20px',
        transition: 'all 300ms',
        fontSize: 22,
        '&:hover': {
            color: props.theme.tertiaryColor
        }
    }),
    blogLink: (props: IHeaderProps) => ({
        textDecoration: 'none',
        color: props.theme.backgroundVariant,
        margin: '10px 20px',
        transition: 'all 300ms',
        fontSize: 22,
        '&:hover': {
            color: props.theme.tertiaryColor
        }
    }),
    worksLink: (props: IHeaderProps) => ({
        textDecoration: 'none',
        color: props.theme.backgroundVariant,
        margin: '10px 20px',
        transition: 'all 300ms',
        fontSize: 22,
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        }
    }),
    icons: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    }, 
    facebook: (props: IHeaderProps) => ({
        color: props.theme.backgroundVariant,
        transition: 'all 300ms',
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        },
    }), 
    youtube: (props: IHeaderProps) => ({
        color: props.theme.backgroundVariant,
        transition: 'all 300ms',
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        },
    }), 
    twitter: (props: IHeaderProps) => ({
        color: props.theme.backgroundVariant,
        transition: 'all 300ms',
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        },
    }), 
    instagram: (props: IHeaderProps) => ({
        color: props.theme.backgroundVariant,
        transition: 'all 300ms',
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        },
    }), 
    vimeo: (props: IHeaderProps) => ({
        color: props.theme.backgroundVariant,
        transition: 'all 300ms',
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: props.theme.tertiaryColor
        },
    }), 
    icon: {
        fontSize: 22,
    },
    themeIcon: {
        position: 'absolute',
        right: '1%',
        top: 10,
        alignSelf: 'center',
        textAlign: 'center',
        cursor: 'pointer'
    }
});

export default headerStyles;