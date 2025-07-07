import React from 'react';
import type { Metadata } from 'next';
import { programMetadata } from './metadata';

export const metadata: Metadata = {
  ...programMetadata.advocacy,
  openGraph: {
    title: programMetadata.advocacy.title,
    description: programMetadata.advocacy.description,
    url: 'https://www.refugeebrotherhood.org/programs/advocacy',
    type: 'website',
  },
};

export default function AdvocacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 