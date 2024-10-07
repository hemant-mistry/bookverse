import { Button } from "../ui/button";
import { Navbar } from "../ui/Navbar";
import { PencilLine } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Book } from 'lucide-react';
export function HomePage() {

  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-14">
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <Button className="bg-blue-500 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-10">
                <b className="pr-2 text-white">Bookverse</b>{" "}
                <span className="opacity-50 pr-2 text-white">
                  is currently in beta
                </span>{" "}
                <span className="text-white">&gt;</span>
              </Button>

              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-6xl">
                  Share the Words that <br /> Moved You!
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-2xl">
                <p className="text-md text-muted-foreground">
                  Collect and share the quotes that inspire you—from books,
                  social media, and beyond.
                  <br />
                  Join a community of thinkers and dreamers.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button className="rounded-[25px] px-6 py-2" size={"lg"}>
                  Get started
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Icon Blocks */}
      <div className="container py-24 lg:py-15">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div className="mb-10">
              <h2 className="text-3xl font-light lg:text-5xl">Sometimes, the right words 
                <br/>
                can change everything.
              </h2>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
              <PencilLine className="flex-shrink-0 mt-2 h-6 w-6"/>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base text-left sm:text-lg font-semibold">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-left text-muted-foreground">
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
              <Book className="flex-shrink-0 mt-2 h-6 w-6"/>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base text-left sm:text-lg font-semibold">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-left text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
              <HeartHandshake className="flex-shrink-0 mt-2 h-6 w-6"/>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base text-left sm:text-lg font-semibold">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-left text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
