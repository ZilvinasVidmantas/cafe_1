import React from 'react';
import SquareContainer from '../../components/square-container';

const ApartmentGridPageImage = ({ alt, ...props }) => <SquareContainer><img {...props} alt={alt ?? 'Mes nenaudojam SEO'} /></SquareContainer>;

export default ApartmentGridPageImage;
