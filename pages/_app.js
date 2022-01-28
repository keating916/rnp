import '../styles/globals.css'
import TopNav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return (
  <>	
		<TopNav />
		<div className="body">
			<Component {...pageProps} />
		</div>
  </>
  )
}

export default MyApp
