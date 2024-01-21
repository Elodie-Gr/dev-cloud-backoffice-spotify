// ArtistsTab.js
import React, {useState, useEffect} from 'react';
import {ItemsList} from '../ArtistsList';
import {fetchArtists} from '../../services/api/artistApi';
import SearchBar from '../SearchBar';

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArtistsTab = () => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const artists = await fetchArtists();
        setArtists(artists);
        console.log('Artists fetched successfully:', artists);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDeleted(false);
  };

  const handleDelete = async () => {
    try {
      const updatedArtists = await fetchArtists();
      setArtists(updatedArtists);
      setDeleted(true);
    } catch (error) {
      console.error('Error fetching updated songs:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const updatedArtists = await fetchArtists();
      setArtists(updatedArtists);
      setEdited(true);
    } catch (error) {
      console.error('Error fetching updated songs:', error);
    }
  };

  const handleSearch = (results, query) => {
    setCurrentPage(1);
    setFilteredArtists(results);
  };

  return (
    <Box sx={{p: 2}}>
      <Typography color="#FFF" variant="h5" sx={{mb: 2}}>
        Artistes
      </Typography>
      <Box>
        <SearchBar data={artists} onSearch={handleSearch} />
      </Box>

      <ItemsList
        items={filteredArtists.length > 0 ? filteredArtists : artists}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Snackbar
        open={deleted}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{width: '100%'}}>
          Artist deleted successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ArtistsTab;
