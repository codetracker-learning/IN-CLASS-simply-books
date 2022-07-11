import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
  // make the call to the API to get all the books on component render

  return (
    <>
      <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link>

      {/* map over books here  */}
    </>
  );
}

export default Home;
