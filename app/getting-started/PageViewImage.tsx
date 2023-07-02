'use client'

import { usePathname, useSearchParams } from "next/navigation";

const PageViewImage = () => {
  const currentPath = usePathname();
  let slug = currentPath?.replace('/', '');
  const searchParams = useSearchParams();

  const utmSource = searchParams?.get('utm_source');
  const utmMedium = searchParams?.get('utm_medium');
  const utmCampaign = searchParams?.get('utm_campaign');

  let utm = '';
  if (utmSource && utmMedium && utmCampaign) {
    utm = `&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
  }

  const params = `slug=${slug}${utm}`;

  return (
    <img src={`/api/page-view?${params}`} alt='Page views' style={{ display: 'none' }} />
  )
};

export default PageViewImage;
