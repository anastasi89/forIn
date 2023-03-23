export default function orderByProps(obj, props) {
  const propsArr = [];
  const sortArr = [];

  for (const key in obj) {
    if (props.includes(key)) {
      propsArr.push({ key, value: obj[key] });
    } else {
      sortArr.push({ key, value: obj[key] });
    }
  }

  sortArr.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...propsArr, ...sortArr];
}
