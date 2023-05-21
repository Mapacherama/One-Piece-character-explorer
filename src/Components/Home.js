import React from 'react';
import FeaturedCharacters from '../Components/FeaturedCharacter';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="bg-gray-100 relative">
      <header className="bg-blue-500 text-white">
        <Container className="py-4">
          <h1 className="text-4xl font-bold">The One Piece Character Explorer</h1>
          <p className="text-lg mt-2">Explore the world of One Piece and its fascinating characters.</p>
        </Container>
      </header>

      <section className="py-8">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="text-2xl font-bold mb-4">Featured Characters</h2>
              <FeaturedCharacters />
            </Col>
            <Col md={6}>
              <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
              {/* Add latest blog post previews or other components */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="mb-4">The One Piece Character Explorer is a platform dedicated to providing information about the vast array of characters in the One Piece universe. Discover details about their backstories, abilities, and more.</p>
          <Button variant="primary">Learn More</Button>
        </Container>
      </section>

      <footer className="bg-gray-800 text-white footer py-4">
  <Container className="text-center flex flex-col">
    
    <div className='flex-grow'>
      <p>&copy; {new Date().getFullYear()} The One Piece Character Explorer. All rights reserved.</p>
    </div>
  </Container>
</footer>

    </div>
  );
};

export default HomePage;

