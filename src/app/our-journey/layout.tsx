import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Journey - 35 Years of Baking Excellence",
  description: "Discover Neil Bakery's inspiring journey from 1990 to today. From a small bakery in Egoda Uyana to 3 outlets serving 1000+ items daily. Learn about our founder Mr. Neil and our commitment to quality.",
  keywords: [
    'Neil Bakery history',
    'bakery since 1990',
    'Sri Lankan bakery story',
    'Mr. Neil founder',
    'Egoda Uyana bakery',
    'Moratuwa bakery history',
    'traditional bakery Sri Lanka'
  ],
  openGraph: {
    title: "Our Journey | Neil Bakery",
    description: "35 years of baking excellence - Discover how Neil Bakery grew from a small shop to Sri Lanka's trusted bakery brand.",
    url: 'https://neilbakery.lk/our-journey',
    images: [
      {
        url: '/assets/images/neil_bakery_our_journey_banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Neil Bakery Journey - 35 Years of Excellence',
      }
    ],
  },
  alternates: {
    canonical: 'https://neilbakery.lk/our-journey',
  },
};

export default function OurJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
