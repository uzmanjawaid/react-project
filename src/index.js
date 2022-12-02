import ReactDOM from 'react-dom';
function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Title = () => <h1>Healing The Emptiness</h1>;
const Image = () => {
  return (
    <img
      src='https://www.readings.com.pk/Pages/Categories/BookImages/9789696402275.jpg'
      alt=''
    />
  );
};
const Author = () => <h4>Yasir Jawaid</h4>;

ReactDOM.render(<Booklist />, document.getElementById('root'));
