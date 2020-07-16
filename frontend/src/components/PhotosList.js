import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import PhotosCarrousel from './PhotosCarrousel';

function PhotosList(props) {

function clear(){
  props.clearAlbum()
  props.clearPhotos()

}
  return (
    <div className={props.classes.topSpace}>
    {props.album && [
      <Typography key='album-tittle' variant="h4" component="h2">{props.album ? props.album.title : ""}</Typography>,
      <Button key='back-button' onClick={clear}>Regresar Atras</Button>,
      <Typography key='album-subtittle' variant="subtitle2" component="h3">Fotos del album</Typography>,
      <Typography key='album-caption'variant="caption" component="p"> {props.photos.length} Foto(s) en este album</Typography>,
      
    ]
    } 
    <PhotosCarrousel photos={props.photos} />
    </div>
     
  );
}

export default withStyles({
  topSpace:{
    marginTop: '2em'
  }
})(PhotosList);
