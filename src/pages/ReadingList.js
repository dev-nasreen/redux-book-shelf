import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageLayout from '../components/PageLayout/PageLayout';
import SingleBook from '../components/Book/Book';

const ReadingList = () => {
    const books = useSelector((state) =>{
        return state.books.readingList;
    })
    return (
        <PageLayout>
               {
                books?.length ?
            
                books?.map((book) => (<SingleBook key={book.id} book={book} />))
                :
                <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
             
        </PageLayout>
    );
};

export default ReadingList;