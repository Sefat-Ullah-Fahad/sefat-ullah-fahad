import { Gelasio, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import dynamic from 'next/dynamic';
import ClientLayout from '../components/ClientLayout';
import Header from '@/components/sheard/Navbar';

const Footer = dynamic(() => import('@/components/sheard/Footer'));

const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
});

const siteUrl = 'https://sefat-ullah-fahad.web.app';
const profileImage =
  'https://res.cloudinary.com/dsga4gyw9/image/upload/f_auto,q_auto,w_1200/v1786959761/sefat-ullah-fahad_fdxwuu.jpg';

// Official name (matches registered document, without "MD")
const fullName = 'Sefatullah Fahad';
const fullNameBn = 'ছিফাতউল্লাহ ফাহাদ';
const nameVariants = ['Sefat Ullah Fahad', fullNameBn];

const titleDefault = `${fullName} | Full Stack Developer`;
const description = `${fullName} (${fullNameBn}) — Full Stack Developer from Rajshahi, Bangladesh. Building fast, scalable web apps with Next.js, React, Node.js, Express, MongoDB & Supabase.`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  generator: 'Next.js',

  title: {
    default: titleDefault,
    template: `%s | ${fullName}`,
  },

  description,

  keywords: [
    fullName,
    'Sefat Ullah Fahad',
    fullNameBn,
    `${fullName} portfolio`,
    `${fullName} developer`,
    'Full Stack Developer',
    'Full Stack Developer Bangladesh',
    'Full Stack Developer Rajshahi',
    'Next.js Developer',
    'React Developer',
    'MERN Stack Developer',
    'Web Developer Bangladesh',
    'Web Developer Rajshahi',
    'Frontend Developer',
    'Backend Developer',
    'Exprovia',
  ],

  authors: [{ name: fullName, url: siteUrl }],
  creator: fullName,
  publisher: fullName,

  verification: {
    google: 'x600XH1dDq7PeweseUznfpexDsfaMqiI_JkszWL88N8',
  },

  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: fullName,
    title: titleDefault,
    description,
    firstName: 'Sefatullah',
    lastName: 'Fahad',
    username: 'sefatullahfahad',
    images: [
      {
        url: profileImage,
        width: 1200,
        height: 630,
        alt: `${fullName} - Full Stack Developer`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: titleDefault,
    description,
    images: [profileImage],
    creator: '@sefatullahfahad',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'x-default': siteUrl,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  manifest: '/manifest.webmanifest',

  category: 'technology',
  applicationName: `${fullName} Portfolio`,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: fullName,
      alternateName: nameVariants,
      description,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: fullName,
      givenName: 'Sefatullah',
      familyName: 'Fahad',
      alternateName: nameVariants,
      jobTitle: 'Full Stack Developer',
      description,
      url: siteUrl,
      image: profileImage,
      email: 'mailto:fahad.web.code@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajshahi',
        addressCountry: 'BD',
      },
      sameAs: [
        'https://www.linkedin.com/in/sefat-ullah-fahad/',
        'https://github.com/Sefat-Ullah-Fahad', // verify: or sefatullahfahad
        'https://medium.com/@sefatullahfahad',
        'https://dev.to/sefat-ullah-fahad',
        'https://x.com/sefatullahfahad',
        'https://www.facebook.com/sefat.ullah.fahad',
        'https://www.instagram.com/sefatullahfahad/',
      ],
      knowsAbout: [
        'Next.js',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Supabase',
        'Full Stack Development',
        'JavaScript',
        'TypeScript',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Experivia',
      },
      nationality: {
        '@type': 'Country',
        name: 'Bangladesh',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: titleDefault,
      description,
      mainEntity: { '@id': `${siteUrl}/#person` },
      isPartOf: { '@id': `${siteUrl}/#website` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: 'smooth' }}
      className={`${gelasio.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${gelasio.className} ${gelasio.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased min-h-screen overflow-x-hidden`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-pink-500 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}