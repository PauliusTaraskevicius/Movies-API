import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer footer-center w-full p-4  text-white">
      <div className="text-center">
        <p>
          Copyright © 2022 -
          <Link className="font-semibold px-1" href="#">
            Paulius Taraškevičius
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
