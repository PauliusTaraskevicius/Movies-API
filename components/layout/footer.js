import Link from 'next/link'

function Footer() {
  return (
    <footer class="footer footer-center w-full p-4  text-white">
      <div class="text-center">
        <p>
          Copyright © 2022 -
          <Link class="font-semibold px-1" href="#">
            Paulius Taraškevičius
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
