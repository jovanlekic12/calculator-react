function Button(props) {
  const { onClick, className, type, children } = props;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
