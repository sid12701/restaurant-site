import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily:{
			'Riffic':['Riffc', 'sans-serif'],
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  animation: {
			shimmer: "shimmer 2s linear infinite",
		  },
		  keyframes: {
			shimmer: {
			  from: { backgroundPosition: "0 0" },
			  to: { backgroundPosition: "-200% 0" },
			},
		  },
	
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
