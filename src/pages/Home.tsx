import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import FeaturedProducts from '../components/FeaturedProducts';
import Offers from '../components/Offers';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Banner />
      <CategoryList />
      <FeaturedProducts />
      <Offers />
	<Benefits />
	<About />
	<Footer />

    </>
  );
}