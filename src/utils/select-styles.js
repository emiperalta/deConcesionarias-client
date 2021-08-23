const style = {
  control: (base, state) => ({
    ...base,
    border: '3px solid transparent !important',
    boxShadow: 'none',
    transition: 'border-bottom .3s ease',
    borderBottom: state.isFocused
      ? '3px solid #f63 !important'
      : '3px solid transparent !important',
  }),
  input: styles => ({
    ...styles,
    borderBottom: 0,
  }),
};

export default style;
