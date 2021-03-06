import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>   
      <main id="main" className="grid-container grid-container--home ">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white d-block"> Space</span>
          </h1>
          <p className="self-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            className="large-button uppercase ff-serif text-dark bg-white fs-600"
            to="/destination"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
