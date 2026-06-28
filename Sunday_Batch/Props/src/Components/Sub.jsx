const Sub = ({ props }) => {
  const { count, sub } = props;
  const minus = count - sub;
  return <div>Sub {minus}</div>;
};

export default Sub;
