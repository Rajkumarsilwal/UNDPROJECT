import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";

const PaginationComponent = ({ posts, postsPerPage, onPaginate }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    onPaginate(page); // Pass the current page back to the parent
  }, [page, posts, onPaginate]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
      />
    </Box>
  );
};

export default PaginationComponent;
