import Link from "next/link";
const MenuItems = ({ mn }) => {
  return (
    <>
      <Link
        className="text-green-500 opacity-80 hover:opacity-100 transition-opacity link-underline-right lg:text-lg text-xl"
        href={mn.url}
      >
        {mn.name}
      </Link>
    </>
  );
};

export default MenuItems;
