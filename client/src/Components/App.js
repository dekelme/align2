import React, { useEffect, useState} from 'react';
import Picture from './Picture';
import PictureList from './PictureList';
import Thumbnail from "./Thumbnail";

export default function App(props) {
  const [pictures, setPictures] = useState([]);
  const fetchPic = () => {
      fetch(`http://localhost:8000/api/picture`).then(response => response.json())
          .then(data => setPictures(data))
  }
  useEffect(() => {
      fetchPic()

  },[])
  return (
    <div>
     <Picture picture={pictures}/>
     <PictureList thumbnail={pictures} />
    </div>
  );
}
