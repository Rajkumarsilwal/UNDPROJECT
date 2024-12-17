import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import FilterPostSearch from "./FilterPostSearch";
import PaginationComponent from "./PaginationComponent";
import { fetchPosts9Days } from "./fetchPosts9Days";

const PostList = () => {
  const [posts, setPosts] = useState([]); // All posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [page, setPage] = useState(1); // Pagination state
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const postsPerPage = 4; // Number of posts per page

  // Fetch posts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchPosts9Days();
        setPosts(allPosts);
        setFilteredPosts(allPosts); // Initialize filtered posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false); // Set loading to false when fetch completes
      }
    };
    fetchData();
  }, []);

  // Filter posts when searchTerm changes
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
    setFilteredPosts(filtered); // Update filtered posts
    setPage(1); // Reset pagination to first page
  }, [searchTerm, posts]);

  // Highlight the search term in text
  const highlightText = (text, term) => {
    if (!term) return text; // Return original text if no search term
    const regex = new RegExp(`(${term})`, "gi"); // Create a case-insensitive regex
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Paginate filtered posts
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>

      {/* Search Component */}
      <FilterPostSearch searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Loading State */}
      {isLoading ? (
        <Typography>Loading posts...</Typography>
      ) : posts.length === 0 ? (
        <Typography>No data available for the given date range.</Typography>
      ) : filteredPosts.length === 0 ? (
        <Typography>No matching posts found.</Typography>
      ) : (
        <>
          {/* Display Posts */}
          {currentPosts.map((post) => (
            <Card key={post.id} variant="outlined" sx={{ mb: 2 }}>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Avatar src={post.image} alt={post.author} sx={{ width: 56, height: 56 }} />
                <Box>
                  <Typography variant="h6">
                    {highlightText(post.author, searchTerm)}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    @{highlightText(post.username, searchTerm)} |{" "}
                    {new Date(post.date).toLocaleString()}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {highlightText(post.message, searchTerm)}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Location: {highlightText(post.location, searchTerm)} | Likes: {post.likes} |
                    Reposts: {post.reposts}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* Pagination Component */}
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
