'use client'

import { useState } from "react";

export default function UsesPage() {

  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const { error } = await res.json();
      if (error) {
        throw new Error(error);
      }
      setEmail('');
      alert('Thanks for subscribing!');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section>
      <form className='flex flex-col gap-5 w-3/4 mx-auto' onSubmit={handleSubscribe}>
        <h2 className='text-center mt-4'><span className='text-3xl font-bold bg-gradient-to-b leading-9 tracking-wide gradient-title'>Subscribe to Newsletter</span></h2>
        <small className='text-center'>Get my latest articles, videos, and resources delivered to your inbox.</small>
        <input type="email" name="email" id="email" placeholder="Enter your email address" className='border-2 border-gray-300 rounded-lg p-2' onChange={(e) => setEmail(e.target.value)} required/>
        <button className='bg-yellow-500  hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full'>Subscribe</button>
      </form>
    </section>
  );
}
