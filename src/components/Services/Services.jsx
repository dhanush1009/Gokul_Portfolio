import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function Services() {
  const { data } = usePortfolio();

  return (
    <section className="section" id="services">
      <div className="shell services-wrap">
        <div className="services-intro">
          <span className="eyebrow mono">What I do</span>
          <h2>
            From first cut
            <br />
            to final <em>feeling.</em>
          </h2>
          <p>
            Every edit starts with a question: what should this make someone
            feel? I build from there — finding the pace, the pause, and the
            details that make a piece memorable.
          </p>
          {/* <a href="#contact" className="button button-primary">
            Start a project <span>↗</span>
          </a> */}
        </div>

        <div className="service-list">
          {data.services?.map((service, index) => (
            <div className="service" key={index}>
              <span className="service-num mono">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
