import { Metadata } from "next";
import SubscribeForm from "./form";

export const metadata: Metadata = {
  title: 'Subscribe to Newsletter',
  description: 'Get my latest articles, videos, and resources delivered to your inbox.'
};

export default function UsesPage() {
  return (
    <section>
      <SubscribeForm />
    </section>
  );
}
