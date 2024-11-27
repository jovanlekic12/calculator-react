function Button(props) {
  const { className, type, children } = props;

  return <button className={className}>children</button>;
}

export default Button;
