import type { NextApiRequest, NextApiResponse } from "next";
import { queryBuilder } from "lib/planetscale";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;
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
