import { fetchAPI } from '../../requests';
const itemGenerate = () => {
  const res = fetchAPI().then(filmList => {
    console.log(filmList);
    const l = filmList.map(({ title, id }) => {
      <li key={id}>{title}</li>;
    });
    return l;
  });
  return res;
};

// const list = fetchAPI().then(({ data }) => {
//   const filmList = data.results;
//   console.log(filmList);
//   return filmList.map(({ title, id }) => <li key={id}>{title}</li>);
// });
// .then(filmList => {
//   return filmList.);
// });
// console.log(
//   list.then(r => {
//     return r;
//   })
// );

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <>{itemGenerate()}</>
    </>
  );
};
export default Home;
