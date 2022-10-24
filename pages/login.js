import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Spotify from "next-auth/providers/spotify";

const Login = (providers) => {
  return (
    <div className="flex space-y-6 flex-col bg-black h-screen items-center justify-center">
      <img
        className="w-60"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo_spotify"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.spotify.name}>
          <button
            className="p-3 bg-[#1ED760] rounded-full text-white"
            onClick={() => signIn(provider.spotify.id, { callbackUrl: "/" })}
          >
            Login with {provider.spotify.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  console.log(providers);
  return {
    props: {
      providers,
    },
  };
}
