import React from 'react';

export default function Marquee() {
  const items = [
    { title: 'Video Editing', subtitle: 'Motion Design' },
    { title: 'Video Editing', subtitle: 'Motion Design' },
    { title: 'Video Editing', subtitle: 'Motion Design' },
    { title: 'Video Editing', subtitle: 'Motion Design' },
    { title: 'Video Editing', subtitle: 'Motion Design' }
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* Repeating sequence for smooth endless scroll */}
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <strong>{item.title}</strong>
            <span className="marquee-dot"></span>
            <span>{item.subtitle}</span>
            <span className="marquee-dot"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
