import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: '#4267b2'
    },
    "body.dark-mode": {
      transition: 'color 0.3s ease, background 0.3s ease',
      backgroundColor: '#12161f',
      color: '#e5ded9',
    },
    "body.light-mode": {
      transition: 'color 0.3s ease, background 0.3s ease',
      backgroundColor: '#fffcfc',
      color: '#191926',
    },
    "blockquote": {
      color: 'inherit',
      opacity: 0.5,
      borderLeft: '0.32813rem solid #487eb0'
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
