const cutText = (text, max) => {
  if(text.length < max) return text;
  const upperLimit = max - 3;
  const to = text.slice(0, upperLimit).lastIndexOf(' ');
  return text.slice(0, to) + '...';
}
