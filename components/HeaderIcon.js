function HeaderIcon({ Icon }) {
  return (
    <div
      className="rounded-xl cursor-pointer flex
     items-center md:px-10 sm:h-14 md:hover:bg-gray-100 
     active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className="h-5 text-center sm:h-7 mx-auto
       group-hover:text-blue-500"
      />
    </div>
  );
}

export default HeaderIcon;