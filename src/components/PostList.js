import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import FilterPostSearch from './FilterPostSearch';
import PaginationComponent from './PaginationComponent';
import { fetchPosts9Days } from './fetchPosts9Days';
import moment from 'moment-timezone';
import defaultLanguage from './LanguageConvertor/Languages/en.json'
import { LanguageContext } from './LanguageConvertor/LanguageContext';


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchPosts9Days();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        post.message.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower) ||
        post.username.toLowerCase().includes(searchLower) ||
        post.location.toLowerCase().includes(searchLower)
      );
    });
    setFilteredPosts(filtered);
    setPage(1);
  }, [searchTerm, posts]);

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Function for time formatting 
  const formatToUserTimeZone = (date) => {
    return moment.utc(date).local().format('YYYY-MM-DD hh:mm A z');
  };
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const validPage = Math.min(page, totalPages);
  const indexOfLastPost = validPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  // const indexOfLastPost = page * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // For language conversion 
  const { language } = useContext(LanguageContext);
  const lang = language ?? defaultLanguage;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant='h4' gutterBottom>
        {lang?.postList?.Title ?? "Recent Posts"}
      </Typography>

      <FilterPostSearch searchTerm={searchTerm} onSearch={setSearchTerm} />

      {isLoading ? (
        <Typography>{lang?.postList?.Loading ?? "Loading posts..."}</Typography>
      ) : posts.length === 0 ? (
        <Typography>{lang?.postList?.NoData ?? "No data available for the given date range."}</Typography>
      ) : filteredPosts.length === 0 ? (
        <Typography>{lang?.postList?.FilterData ?? "No matching posts found."}</Typography>
      ) : (
        <>
          {currentPosts.map((post) => (
            <Card key={post.id} variant='outlined' sx={{ mb: 2 }}>
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={post.image} alt={post.author} sx={{ width: 56, height: 56 }} />
                <Box>
                  <Typography variant='h6'>
                    {highlightText(post.author, searchTerm)}
                  </Typography>
                  <Typography variant='subtitle2' color='textSecondary'>
                    @{highlightText(post.username, searchTerm)} |{' '}
                    {formatToUserTimeZone(post.date)}
                  </Typography>
                  <Typography variant='body1' sx={{ mt: 1 }}>
                    {highlightText(post.message, searchTerm)}
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    Location: {highlightText(post.location, searchTerm)} | Likes: {post.likes} |
                    Reposts: {post.reposts}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
          <PaginationComponent
            posts={filteredPosts}
            postsPerPage={postsPerPage}
            onPaginate={(newPage) => setPage(newPage)}
          />
        </>
      )}
    </Box>
  );
};

export default PostList;
