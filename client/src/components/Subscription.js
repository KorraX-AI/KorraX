import './Subscription.css';

function Subscription() {
  return (
    <div className="subscription">
      <h2>Subscribe Now</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;
