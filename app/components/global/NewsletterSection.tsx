"use client";

import { useState } from "react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your newsletter service
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFirstName("");
      setEmail("");
    }, 1000);
  };

  return (
    <div>
      <h6 className="font-incognito font-semibold text-lg dark:text-white text-zinc-900 mb-4">
        Stay up to date
      </h6>
      <div className="mt-4 max-w-md">
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Subscribe to the newsletter to stay up to date with articles, courses and much more!{" "}
          <Link
            href="/subscribe"
            className="text-primary-color hover:underline inline-flex items-center gap-1"
          >
            Learn more about the newsletter
            <BiRightArrowAlt className="inline-block" />
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm dark:text-zinc-400 text-zinc-600 mb-2"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-color"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm dark:text-zinc-400 text-zinc-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-color"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="flex items-center gap-2 px-6 py-2 rounded-md dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 dark:text-white text-zinc-900 hover:bg-primary-color hover:text-white dark:hover:bg-primary-color transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitted ? (
            "Subscribed!"
          ) : (
            <>
              Sign me up
              <div className="w-8 h-8 rounded-full dark:bg-zinc-700 bg-zinc-200 flex items-center justify-center">
                <BiRightArrowAlt className="text-sm" />
              </div>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

