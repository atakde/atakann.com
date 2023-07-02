import type { NextApiRequest, NextApiResponse } from "next";
import { queryBuilder } from "lib/planetscale";

const isValidateEmail = (email: string) => {
  const re =
    // eslint-disable-next-line no-control-regex
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  return re.test(String(email).toLowerCase());
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.send("Method not allowed.");
  }

  const email = req.body.email as string;

  if (!email || !isValidateEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const data = await queryBuilder
    .selectFrom("email_subscribers")
    .where("email", "=", email)
    .select(["id"])
    .execute();

  if (data.length > 0) {
    return res.status(400).json({ error: "Email already subscribed" });
  }

  try {
    await queryBuilder
      .insertInto("email_subscribers")
      .values({ email })
      .execute();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }

  return res.status(200).json({ error: null });
}
