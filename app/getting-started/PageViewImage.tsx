'use client'

const PageViewImage = ({ slug }) => {
  return (
    <img src={`/api/page-view?slug=${slug}`} alt='Page views' style={{ display: 'none' }} />
  )
};

export default PageViewImage;
