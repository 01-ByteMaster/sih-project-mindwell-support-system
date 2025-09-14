
// src/components/Features.js
import React from 'react';
import FeatureCard from './FeatureCard.jsx';

const featureData = [
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmXORmUYkI_waOn5VkvugGOkueD2CivxskMyXhH8oNb5xcp96BYiUW-xnsODWyXLytx2G7l4nbIpHW4yzdoZh_Xf_A3THvQk3rqFTVbDoY_StjYZCxpL9aY1m_CYvuAGvYJPnxAuvUIUZH0FGoRN3sSpN-X1IZLD07F2SmIn1BESc3GLb_3W6ez61e7IV7iOvz_TvO0k3E7RSE6_yRksbScC3IFbshFMCv5aMgiu5LRhN97if3G06llQb5DWhJtsCamTrb07omMw',
    title: 'Mindfulness Exercises',
    description: 'Guided meditations and mindfulness practices to help you relax and focus.',
  },
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe15dmsy_YTRb2KL3k2TNXo1ix9R7iow9JYJBzYXHTYsc93AsRPei7i7AQuiuhEnAAjaCQaidW1XaYTi9hoO8369kfQdmjeNo9jbh7MhmKNuYXDGAYTeJSpAB2ElFebgsasmtO1fGctGlDC6k57EspCU5ZjagX7VwXSkxY1rYplBShdij7LVwz5YOkBbW1EmFL5BlpNcdsMjIHrHAtpl4IpIL5Ioj3MBzmvLbaza54zbheyobgTFNToiWT56Yi4j1xdSeZsKJag',
    title: 'Educational Resources',
    description: 'Articles, videos, and guides on various mental health topics.',
  },
  {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4rKeUyBqJfp_BsCb187C_ltWVyPLOC3hVwy8S1U0PlezypbeAuEVAuqcvuIclJMqBUZ_09nExjidXHxMKkqPj7vqOKUYk2Cbhc7MsZY7lCjjhVNm_eOOcLcAOm_lcq5egLBt4lsKFg5hEm6B-cPBWE0iz63S0L5x-_zESVn1nDzeyELzJoVQrgQHaxcZQg7fPrxXcFwtSKv2NvyRiyFHQySUMMJX3n4HoOk5FhkHk1qdEf7Cj31fo_nRDKVhblMRZrExueHs9pA',
    title: 'Therapy Sessions',
    description: 'Connect with licensed therapists for personalized support.',
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-10 py-10 @container">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-slate-800 tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-tight max-w-[720px] mx-auto">
          Explore Our Features
        </h1>
        <p className="text-slate-600 text-lg font-normal leading-normal max-w-[720px] mx-auto">
          Discover a range of tools and resources designed to support your mental health journey.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;