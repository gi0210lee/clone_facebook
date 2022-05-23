import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    id: 0,
    name: "Sonny Sangha",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmcaylD4UZorJ-iGaf2XLqW8BLRQ5X8vuraYsYhpiuE3ZkP4IG4XluRXEjw&s",
  },
  {
    id: 1,
    name: "Elon Musk",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFnL_40rfGliEGJwIepaF4tbags-TDevZ0XUA7mRDiOPS4mCqje6SA3jptw&s",
  },
  {
    id: 2,
    name: "Jeff Bezoz",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHl1kkJPaDt0VWuVLsxAaDZUjMspY0G5pLwEY-t7TvlxiZqfQYWLBMCtR6dA&s",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZblSHqAJ9UDS8nSbQd7HoNNtIWne1x0KMDAUX_TXfWl3uImsVZR26o4HPQ&s",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKldsJN54lIUGCSBevYUotSaDXN2A19bUqOySBrGI1dDyqbhvMcR5V0IUj9g&s",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-2 ">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
          <VideoCameraIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
