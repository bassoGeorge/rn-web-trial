import React from "react";
import { HomeWrapper } from "./home.wrapper";
import { EnvConfig } from "../../../../env-config";
import { Link } from "react-router-dom";

export default function Home({}) {
  return (
    <HomeWrapper
      render={({ title, subTitle, onClick }) => (
        <div>
          <div
            css={`
              padding: 20px;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <h1
              css={`
                font-size: 20px;
              `}
            >
              {title} | Home Page
            </h1>
            <p>{subTitle}</p>
            <p>
              Some more text just to try out. We need more text to verify the
              padding on the view because react native makes it difficult to
              guess
            </p>
            <button onClick={() => onClick("web")}>
              Try out a redux action
            </button>
          </div>
          <div>
            <Link to="/details?name=john&id=32">Details</Link>
          </div>
          <div
            css={`
              padding: 20px;
              margin-top: 30px;
              width: 100%;
            `}
          >
            <p>App platform: {EnvConfig.getPlatform()}</p>
            <p>App environment: {EnvConfig.getEnvironment()}</p>
            <p>API host: {EnvConfig.getApiUrl()}</p>
          </div>
        </div>
      )}
    />
  );
}
