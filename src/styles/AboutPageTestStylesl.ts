import { makeStyles } from '@material-ui/core/styles';
import meImageDark from '../assets/me_black2.jpg';
import meImageLight from '../assets/me_white2.jpg';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export const useStyles = makeStyles((theme) => {
  const context = useContext(ThemeContext);
  const { isDarkMode } = context;
  return {
    wrapper: {
      overflowX: 'hidden',
      height: '100vh',
      margin: '-24px',
      background: isDarkMode
        ? `url(${meImageDark}) no-repeat center center`
        : `url(${meImageLight}) no-repeat center center`,
      backgroundSize: 'cover',
    },
    mainHeader: {
      height: '50%',
      width: '40%',

      position: 'absolute',
      top: '350px',
      right: 100,
    },
  };
});
