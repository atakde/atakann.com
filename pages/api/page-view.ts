import type { NextApiRequest, NextApiResponse } from "next";
import { queryBuilder } from "lib/planetscale";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let slug = req.query.slug as string;
  const utmSource = req.query.utm_source as string;
  const utmMedium = req.query.utm_medium as string;
  const utmCampaign = req.query.utm_campaign as string;

  if (utmSource && utmMedium && utmCampaign) {
    slug = `${slug}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
  }

  const data = await queryBuilder
    .selectFrom("page_views")
    .where("slug", "=", slug)
    .select(["id", "count"])
    .execute();

  if (data.length > 0) {
    await queryBuilder
      .updateTable("page_views")
      .set({ count: data[0].count + 1 })
      .where("id", "=", data[0].id)
      .execute();
  } else {
    await queryBuilder
      .insertInto("page_views")
      .values({ slug, count: 1 })
      .execute();
  }

  // return empty image

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.setHeader("Pragma", "no-cache");

  res.send(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" />
    `);
}
