import { ErrorBoundary, hydrate, lazy, LocationProvider, Route, Router, prerender as ssr } from 'preact-iso';
import '@/styles/global.css';
import App from "./app"

// const RouteManager = () =>
		// <LocationProvider>
		// 	<ErrorBoundary>
		// 		<Router>
		// 			<Route path='/' component={lazy(() => import("./app"))} />
		// 		</Router>
		// 	</ErrorBoundary>
		// </LocationProvider>


if (typeof window !== 'undefined')
	hydrate(<App />, document.getElementById('app'));

export async function prerender(data) { return await ssr(<App {...data} />);}
