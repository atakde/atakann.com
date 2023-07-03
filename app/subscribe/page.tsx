import { Metadata } from "next";
import SubscribeForm from "./form";
import PageViewImage from "app/getting-started/PageViewImage";

export const metadata: Metadata = {
  title: 'Subscribe to Newsletter',
  description: 'Get my latest articles, videos, and resources delivered to your inbox.'
};

export default function UsesPage() {
  return (
    <section>
      <SubscribeForm />
      <PageViewImage />
    </section>
  );
}
