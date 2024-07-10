import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";



const Header =() => {
  return <header className='py-8 xl:py-12 text-white'>
    <div className='container mx-auto flex justify-between items-center'>
      <Link href='/'>
        <h1 className='text-4xl font-semibold'>
          Ueverton <span className='text-accent'>.</span>
        </h1>
      </Link>

      <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href='/contact'>
          <Button>Hire me</Button>
        </Link>
      </div>

      <div className="xl:hidde">
        <MobileNav />
      </div>
    </div>
  </header>
};

export default Header;