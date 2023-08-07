import React from 'react';
// Article Content
import ArticleContent from './Article-content';
// import { Link } from 'react-router-dom';
import Articles from '../Components/Articles';

const ArticleList = () => {
  return (
    <div>
         <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
            Articles
        </h1>
        <div className='conatiner py-4 mx-auto'>
            <div className='flex flex-wrap -m-4'>
               <Articles articles={ArticleContent} />

            </div>

        </div>
    </div>
  )
}

export default ArticleList;