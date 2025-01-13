import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({ searchParams } : {
  searchParams: Promise<{query? : string}>
}) {

  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect with Entrepreneur
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Putches, and Get Noticed in Virtural Competitions.
        </p>

        <SearchForm query={query}/>


      </section>


      
    </>
  );
}
 