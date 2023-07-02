// import 'server-only' not working with API routes yet
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  created_at?: string;
  updated_at?: string;
}

interface ViewsTable {
  id: Generated<number>;
  slug: string;
  count: number;
}

interface EmailSubscribersTable {
  id: Generated<number>;
  email: string;
  created_at?: string;
  updated_at?: string;
}

interface Database {
  guestbook: GuestbookTable;
  page_views: ViewsTable;
  email_subscribers: EmailSubscribersTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
