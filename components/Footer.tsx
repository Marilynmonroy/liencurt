import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper p-5 text-center sm:flex-row">
        <Link href="/">
          {" "}
          <h1 className="text-2xl font-extrabold color text-primary-500 ">
            LienCurt
          </h1>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
