import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import defaultProfileImg from '../../assets/gokul-profile.png';

export default function Hero() {
  const { data, openVideoModal } = usePortfolio();
  const profileImage = data.profileImage || defaultProfileImg;

  const handleWatchReel = () => {
    openVideoModal({
      title: `${data.name} — Showreel`,
      meta: 'Main Showreel',
      text: data.reel
        ? 'Cinematic reel showcase.'
        : 'Main portfolio showreel.',
      video: data.reel
    });
  };

  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow mono">Available for select projects</span>
          <h1>
            Gokul Prasath
            <br />
          </h1>
          <h2>
            <em>Video Editor</em>
          </h2>
          <div className="mono role-line"></div>
          <p>{data.intro}</p>

          <div className="hero-cta">
            {/* <button className="button button-primary" onClick={handleWatchReel}>
              Watch the reel <span>▶</span>
            </button> */}
            <a className="button button-ghost" href="#work">
              Explore selected work <span>↓</span>
            </a>
          </div>

          {/* <div className="hero-note"> */}
            {/* <div className="avatars">
              <span
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80')"
                }}
              ></span>
              <span
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80')"
                }}
              ></span>
              <span
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80')"
                }}
              ></span>
            </div>
            <span>Trusted by creative teams, founders &amp; artists</span> */}
          {/* </div> */}

          <div className="scroll-line mono">
            <i></i> Scroll to explore
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-sticker">
            <div>
              <span>✳</span>
              EDIT
              <br />
              WITH
              <br />
              INTENT
            </div>
          </div>
          <div className="hero-frame">
            <img
              src={profileImage}
              alt={data.name || 'Gokul'}
              className="hero-frame-img"
            />
            <div className="hero-frame-overlay" />
            <div className="frame-caption">
              <div>
                <h2>
                  Gokul Prasath
                </h2>
                <p>{data.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
