const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSize: "18px" //font-sizeではなく、キャメルケースで書く
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
