import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
  // TODO: make the call to the API to get all the books on component render

  // TODO: create a function that makes the API call to get all the books

  return (
    <>
      <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link>

      {/* TODO: map over books here using BookCard component */}
    </>
  );
}

export default Home;
