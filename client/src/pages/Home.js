import ContactForm from '../components/ContactForm';
import Portfolio from '../components/Portfolio';
import Subscription from '../components/Subscription';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to KorraX</h1>
      <Portfolio />
      <ContactForm />
      <Subscription />
    </div>
  );
}

export default Home;
