import React from 'react';
import {Redirect} from '@docusaurus/router';

function Home() {
  // Add Netlify Identity script
  if (typeof window !== "undefined") {
    // browser code
    const document = window.document;
    let script = document.createElement("script");
    script.innerHTML = `
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    `;
    document.head.appendChild(script);
  }

  return (
      <Redirect to="/docs/" />
  );
}

export default Home;
