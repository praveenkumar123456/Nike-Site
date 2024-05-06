import Footer from './sections/Footer';
import PopularProducts from './sections/PopularProducts';
import Hero from './sections/Hero';
import Subscribe from './sections/Subscribe';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Nav from './components/Nav';
import Services from './sections/Services';
import SuperQuality from './sections/SuperQuality';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-blue-100 padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App

// Here I use parenthesis instead of curly braces because it allows to immediatly return whatever we want to return
// We can use this code when we don't have any code like (console.log(), any variable or any expression) only passing the jsx(HTML).
