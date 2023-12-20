//Dropzone.js
import React from 'react';
import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from '@mui/system';

const StyledDropzone = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 3,
  borderWidth: 2,
  borderRadius: 4,
  borderStyle: 'dashed',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: 'pointer',
  minHeight: 200,
}));

const Icon = styled(CloudUploadIcon)(({theme}) => ({
  fontSize: 48,
  marginBottom: 2,
}));

const Dropzone = ({onDrop}) => {
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <StyledDropzone {...getRootProps()} elevation={3}>
      <input {...getInputProps()} />
      <Icon />
      <p>
        Faites glisser un fichier ici ou cliquez pour sélectionner un fichier
      </p>
    </StyledDropzone>
  );
};

export default Dropzone;
