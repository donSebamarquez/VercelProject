import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Esto desactiva el linting durante la construcción
  },
};

export default nextConfig;
