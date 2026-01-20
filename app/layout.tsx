import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import PageLoader from "./components/global/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Nitesh Solanki | Software Developer",
  description:
    "Nitesh Solanki is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://niteshsolanki.com",
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "niteshsolanki.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var appliedTheme = theme === 'dark' || theme === 'light' ? theme : systemTheme;
                  if (appliedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Providers>
          <PageLoader />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      )}
    </html>
  );
}
