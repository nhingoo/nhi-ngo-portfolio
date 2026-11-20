tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                brand: {
                    blue: '#0066FF',
                    darkBlue: '#0047B3',
                    yellow: '#FFE600',
                    softBg: '#F4F7FB',
                    ink: '#0F172A'
                }
            },
            animation: {
                'marquee-left': 'marqueeLeft 28s linear infinite',
                'marquee-right': 'marqueeRight 28s linear infinite',
                'gallery-marquee': 'galleryMarquee 32s linear infinite',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                marqueeLeft: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                marqueeRight: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                galleryMarquee: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        }
    }
}
