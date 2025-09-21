import { Button } from '../../components/button';
import { Hero } from 'client/type';
import React from 'react';

import './index.scss';

export function HomeHero(props: { hero: Hero }) {
  const { hero } = props;
  return (
    <div className="predoc-hero">
      <div className="predoc-hero-container">
        <div className="predoc-hero-left">
          <h1 className="predoc-hero-title">
            <span>{hero.name}</span>
          </h1>
          <p className="predoc-hero-text">
            {hero.text}
          </p>
          <p
            className="predoc-hero-tagline"
          >
            {hero.tagline}
          </p>
          <div className="predoc-hero-actions">
            {hero.actions.map((action) => (
              <div key={action.link}>
                <Button type={action.type} href={action.link} theme={action.theme || 'default'}>
                  {action.text}
                </Button>
              </div>
            ))}
          </div>
        </div>
        {hero.image && (
          <div className="predoc-hero-right">
            <img src={hero.image.src || './ico.png'} alt={hero.image.alt || 'logo'} />
          </div>
        )}
      </div>
    </div>
  );
}
