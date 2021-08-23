import Header from 'components/Header';
import Footer from 'components/Footer';

import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
      <Header />
      <section className='page'>{children}</section>
      <Footer />
    </div>
  );
}
