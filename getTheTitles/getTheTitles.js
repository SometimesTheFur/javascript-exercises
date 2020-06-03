    const books = [
    {title: 'Book', author: 'Name'},
    {title: 'Book2', author: 'Name2'}
    ];
const getTheTitles = () => books.map(book => `${book.title}`);

module.exports = getTheTitles;
