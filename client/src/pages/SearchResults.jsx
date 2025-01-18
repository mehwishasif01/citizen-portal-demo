import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Container, Typography } from "@mui/material";

const fetchResults = async () => {
  const response = await fetch("/api/search-results");
  return;
};

const SearchResultsPage = () => {
  const { data, isLoading } = useQuery(["searchResults"], fetchResults);

  if (isLoading) return <CircularProgress />;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <DataGrid
        rows={data || []}
        columns={[
          { field: "id", headerName: "ID", width: 100 },
          { field: "name", headerName: "Name", width: 300 },
          { field: "category", headerName: "Category", width: 200 },
        ]}
        autoHeight
        pageSize={5}
      />
    </Container>
  );
};

export default SearchResultsPage;
