import { PublishProvider } from '@/context/PublishContext';

function MyApp({ Component, pageProps }) {
  return (
    <PublishProvider>
      <Component {...pageProps} />
    </PublishProvider>
  );
}

export default MyApp;
