export const shadowStyles = {
  boxShadow: 1,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: 3,
  },
};

export const hoverStyles = {
  bgcolor: 'common.white',
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'action.hover',
  },
};
