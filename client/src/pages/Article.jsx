import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Content of Article
import Articlecontent from './Article-content';
// Article with image title and content
import Articles from '../Components/Articles';

import NotFound from './NotFound';

import CommentList from '../Components/CommentList';

import AddCommentForm from '../Components/AddCommentform';


const Article = () => {
  //  The came is comming from App.js file from Article component
  const { name } = useParams();
  //we match the Articlecontent name with the url's Article content  name
  const article = Articlecontent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article) return <NotFound />;
  const otherArticles = Articlecontent.filter(article => article.name !== name);

  return (
    <>

      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {/* This is the {name} Article */}
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
      ))}

      <CommentList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />



      <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Other Articles</h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles={otherArticles} />

      </div>


    </>
  )
}

export default Article;