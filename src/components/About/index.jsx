import { kontainer, tracking } from '../../assets/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  return (
    <section>
      <div className='p-0 m-0'>
        <img src={tracking} alt='tracking' />
      </div>
      <div className='flex justify-center max-sm:block pl-20'>
        <div className='lg:w-6/12'>
          <h4
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='700'
            className='md:text-5xl text-3xl font-semibold font-sans tracking-wider leading-normal aos-init aos-animate max-sm:pt-100'
          >
            Deliver Your <span className='text-[#1b648c]'>Logistic</span> <br />
            Safely & Quickly
          </h4>
          <p
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='700'
            className='text-lg mt-5'
          >
            From start to finish, our seamless logistics service
          </p>
        </div>
        <div
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='700'
          className='w-2/4 -mt-44 important lg:px-20 px-5 lg:pt-20 w-full flex lg:flex-row flex-wrap-reverse'
        >
          <img src={kontainer} alt='' />
        </div>
      </div>
    </section>
  );
};

export default About;
