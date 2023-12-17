import React from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = ({onDrop}) => {
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>
        Faites glisser un fichier ici ou cliquez pour sélectionner un fichier
      </p>
    </div>
  );
};

export default Dropzone;
