import { useState, useEffect, useContext } from 'react';
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
  const postsPerPage = 5;

  useEffect(() => {
    const memoryLeakPrevent = new AbortController();
    const fetchData = async () => {
      try {
        const allPosts = await fetchPosts9Days({ signal: memoryLeakPrevent.signal });
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      memoryLeakPrevent.abort();
    }
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

  const { language } = useContext(LanguageContext);
  const lang = language ?? defaultLanguage;

  return (
    <Box
      id="post-list"
      className="post-list-container"
      sx={{ mt: 4 }}>
      <Typography
        variant='h4'
        sx={{
          fontSize: 'clamp(1.5rem, 4vw, 1.7rem)',
          fontWeight: 'bold',
          fontFamily: '"Helvetica Neue", "Helvetica", Arial, sans-serif'
        }}
      >
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
            <Card
              key={post.id}
              variant="outlined"
              sx={{ mb: 2 }}
              role="article"
              aria-label={`Post by ${post.author}, posted on ${formatToUserTimeZone(post.date)}`}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Avatar
                  src={post.image}
                  alt={`Avatar of ${post.author}`}
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  {/* Author Name as Heading */}
                  <Typography variant="h6" component="h2">
                    {highlightText(post.author, searchTerm)}
                  </Typography>

                  {/* Username and Date */}
                  <Typography variant="subtitle2" color="textSecondary">
                    @{highlightText(post.username, searchTerm)} | {formatToUserTimeZone(post.date)}
                  </Typography>

                  {/* Post Message */}
                  <Typography variant="body1" sx={{ mt: 1, textAlign: 'justify' }}>
                    {highlightText(post.message, searchTerm)}
                  </Typography>

                  {/* Location and Stats */}
                  <Typography variant="caption" color="textSecondary" role="contentinfo">
                    Location: {highlightText(post.location, searchTerm)} | Likes: {post.likes} | Reposts: {post.reposts}
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
