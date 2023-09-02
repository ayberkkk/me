import Link from "next/link";
const MenuItems = ({ mn }) => {
  return (
    <>
      <Link
        className="text-sky-500 opacity-80 hover:opacity-100 transition-opacity link-underline-right"
        href={mn.url}
      >
        {mn.name}
      </Link>
    </>
  );
};

export default MenuItems;
