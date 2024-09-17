import React, { useState, useEffect, useCallback } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const fetchArticles = useCallback(async (pageToFetch) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${pageToFetch}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30)
    try {
      const response = await fetch(url);
      const data = await response.json();
      props.setProgress(50)
      if (data.status === 'ok') {
        setArticles((prevArticles) =>
          pageToFetch === 1 ? data.articles : [...prevArticles, ...data.articles]
        );
        setTotalResults(data.totalResults);
      }
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
      props.setProgress(100)
    }
  }, [props.country, props.category, props.apikey, props.pageSize]);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsVaried`;
    fetchArticles(1);  // Load articles for the first page
  }, [fetchArticles]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    if (articles.length < totalResults) {
      fetchArticles(nextPage);
      setPage(nextPage);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{margin:'35px 0px', marginTop: '90px' }}>
      NewsVaried - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
      </h1>

      {loading && page === 1 && <Spinner />} {/* Show spinner only for initial load */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <Newsitem
                  title={article.title || "Untitled"}
                  description={article.description || "No description"}
                  imageUrl={article.urlToImage}
                  url={article.url}
                  author={article.author}
                  source={article.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
