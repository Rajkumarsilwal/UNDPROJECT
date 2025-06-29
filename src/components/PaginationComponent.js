import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";

const PaginationComponent = ({ posts, postsPerPage, onPaginate }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    onPaginate(page);
  }, [page, posts, onPaginate]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      className="pagination-wrapper"
      role="navigation"
      aria-label="Post Pagination Navigation"
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
        aria-label={`Pagination navigation, current page ${page} of ${totalPages}`}
      />
    </Box>
  );
};

export default PaginationComponent;
