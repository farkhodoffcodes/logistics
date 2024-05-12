import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { kamaz } from '../../assets/images';
import About from '../../components/About/index';
import Server from '../../components/Services/index';
import Gallery from '../../components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <Header />
      <section className='flex w-full items-center justify-center px-24 mt-32 lg:px-20 px-5 lg:flex-row max-sm:block'>
        <div className='flex flex-col gap-y-10'>
          <div className='w-full max-sm:w-full'>
            <h1
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='700'
              className='max-sm:text-2xl max-sm:w-full font-ui font-semibold text-4xl'
            >
              We Will Deliver Your <br /> Packages Anywhere!
            </h1>
          </div>
          <div
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='700'
            className='text-2x1'
          >
            <h3 className='max-sm:text-4xl max-sm:font-light font-light text-3x1'>
              FIND IT | BUY IT | SHIP IT
            </h3>
            <p className='text-2xl'>
              We let you shop around the world and ship <br /> to logisippo
              straight to your doorstep!
            </p>
          </div>
        </div>
        <div
          className='w-2/4 lg:absolute relative lg:w-6/12 md:w-7/12 w-full right-0 overflow-hidden aos-init aos-animate'
          data-aos='fade-left'
          data-aos-easing='linear'
          data-aos-duration='700'
        >
          <img className='w-full max-sm:w-full ' src={kamaz} alt='kamaz' />
        </div>
      </section>
      <About />
      <Server />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
