import ApartmentImageContainer from './ApartmentImageContainer';

const ApartmentImage = ({ alt, ...props }) => {
  return <ApartmentImageContainer><img {...props} alt={props.alt ?? 'Mes nenaudojam SEO'} /></ApartmentImageContainer>;
};

export default ApartmentImage;