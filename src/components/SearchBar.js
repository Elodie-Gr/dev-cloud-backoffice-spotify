import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {fetchSongs} from '../services/api/songApi';
import {fetchArtists} from '../services/api/artistApi';
import {fetchAlbums} from '../services/api/albumApi';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    setSearchQuery(query);

    try {
      let results = [];

      if (query) {
        const songs = await fetchSongs();
        const artists = await fetchArtists();
        const albums = await fetchAlbums();

        results = [
          ...songs.filter(song =>
            song.title.toLowerCase().includes(query.toLowerCase()),
          ),
          ...artists.filter(artist =>
            artist.name.toLowerCase().includes(query.toLowerCase()),
          ),
          ...albums.filter(album =>
            album.title.toLowerCase().includes(query.toLowerCase()),
          ),
        ];
      }

      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    // Fetch initial search results when the component mounts
    const fetchInitialResults = async () => {
      try {
        const songs = await fetchSongs();
        const artists = await fetchArtists();
        const albums = await fetchAlbums();

        const initialResults = [...songs, ...artists, ...albums];
        setSearchResults(initialResults);
      } catch (error) {
        console.error('Error fetching initial search results:', error);
      }
    };

    fetchInitialResults();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <Autocomplete
      sx={{width: '75vh'}}
      id="search-bar"
      options={searchResults}
      groupBy={option => option.firstLetter}
      getOptionLabel={option => option.title}
      onInputChange={(event, newInputValue) => handleSearch(newInputValue)}
      renderInput={params => (
        <TextField
          {...params}
          label="Search for a song, album, or artist"
          variant="outlined"
        />
      )}
    />
  );
}
