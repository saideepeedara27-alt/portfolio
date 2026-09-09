import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Eedara Sai Deep - Portfolio',
        short_name: 'Sai Deep Portfolio',
        description: 'Developer portfolio of Eedara Sai Deep - Full-Stack Developer & Backend Engineer, B.Tech CSE (Data Science) student at NIIT University.',
        start_url: '/',
        display: 'standalone',
        background_color: '#09090b',
        theme_color: '#22d3ee',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
