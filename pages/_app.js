import '../styles/globals.css'
import TopNav from '../components/nav'
import ContactForm from '../components/ContactForm'

function MyApp({ Component, pageProps }) {
  return (
  <>	
		<TopNav />
		<div className="body">
			<Component {...pageProps} />
		</div>
    <ContactForm />
  </>
  )
}

export default MyApp
