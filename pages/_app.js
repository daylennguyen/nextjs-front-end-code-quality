import PropTypes from "prop-types";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default MyApp
