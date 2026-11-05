import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ferf1mheo22r9ira.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/docs/components/thinking-orb", destination: "/docs/ui/thinking-orb", permanent: true },
      { source: "/docs/components/metal-fx", destination: "/docs/ui/metal-fx", permanent: true },
      { source: "/docs/components/sticky-slides", destination: "/docs/ui/sticky-slides", permanent: true },
      { source: "/docs/components/img-fx", destination: "/docs/ui/img-fx", permanent: true },
      { source: "/docs/components/border-beam", destination: "/docs/ui/border-beam", permanent: true },
      { source: "/docs/components/voice-glow", destination: "/docs/ui/voice-glow", permanent: true },
      { source: "/docs/components/liquid-gooey", destination: "/docs/ui/liquid-gooey", permanent: true },
    ];
  },
};

export default nextConfig;
