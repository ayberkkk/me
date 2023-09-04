import Link from "next/link";
const MenuItems = ({ mn }) => {
  return (
    <>
      <Link
        className="text-green-500 opacity-80 hover:opacity-100 transition-opacity link-underline-right text-2xl"
        href={mn.url}
      >
        {mn.name}
      </Link>
    </>
  );
};

export default MenuItems;
