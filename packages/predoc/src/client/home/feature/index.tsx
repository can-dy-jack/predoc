import { Feature } from 'client/type';
import React from 'react';

import './index.scss';

export function HomeFeature(props: { features: Feature[] }) {
  const { features = [] } = props;

  return (
    <div className="predoc-home-feature">
      {features.map((feature, index) => {
        const { icon, title, details } = feature;
        return (
          <div key={index} className="feature-item">
            <article
              className="feature-box"
            >
              <div className="feature-header">
                <div
                  className="feature-icon"
                >
                  {icon}
                </div>
                <h2 className="feature-title">{title}</h2>
              </div>
              <p className="feature-details">
                {details}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
}
