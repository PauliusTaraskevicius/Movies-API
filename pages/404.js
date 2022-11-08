import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Page not found!</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
