import { VolumeProvider } from '../lib/VolumeContext';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <VolumeProvider>
            <Component {...pageProps} />
        </VolumeProvider>
    );
}
