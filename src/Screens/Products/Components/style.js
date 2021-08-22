import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 0,
      paddingTop: '66.25%', // 16:9
    },
  }));
  export default useStyles;