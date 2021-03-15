import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ButtonAddPage: {
    width: '140px',
    height: '48px',
    margin: 'auto',
    font: 'inherit',
    fontSize: '20px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3f51b5',
    borderRadius: '3px',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    border: '0',
    opacity: '1',
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': { opacity: '0.6' },
  },
});

const Button = ({ onButton }) => {
  const classes = useStyles();
  const handleButton = () => onButton();

  return (
    <button
      onClick={handleButton}
      type="button"
      className={classes.ButtonAddPage}
    >
      <span>Load more</span>
    </button>
  );
};

export default Button;
