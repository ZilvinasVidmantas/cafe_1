import React from 'react';
import ApartmentgridPageImageContainer from './apartment-grid-page-image-container';

const ApartmentGridPageImage = ({ alt, ...props }) => <ApartmentgridPageImageContainer><img {...props} alt={alt ?? 'Mes nenaudojam SEO'} /></ApartmentgridPageImageContainer>;

export default ApartmentGridPageImage;
