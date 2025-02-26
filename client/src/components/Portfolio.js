import React from 'react';
import './Portfolio.css'; // Assuming you have a CSS file for styling

const portfolioItems = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: '/path/to/image1.jpg',
    link: '/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: '/path/to/image2.jpg',
    link: '/project2'
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    imageUrl: '/path/to/image3.jpg',
    link: '/project3'
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio Page</h2>
      <div className="portfolio-list">
        {portfolioItems.map((item, index) => (
          <article key={index} className="portfolio-item">
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="portfolio-link">View Project</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;