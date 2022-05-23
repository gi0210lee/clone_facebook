import StoryCard from "./StoryCard";

const stories = [
  {
    id: 0,
    name: "Sonny Sangha",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmcaylD4UZorJ-iGaf2XLqW8BLRQ5X8vuraYsYhpiuE3ZkP4IG4XluRXEjw&s",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lBh9dkxRPYsV0SUjOOfO78JVDf3BIOzUswdCJ2mRFu5B68E0rp79ekNE&s",
  },
  {
    id: 1,
    name: "Elon Musk",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFnL_40rfGliEGJwIepaF4tbags-TDevZ0XUA7mRDiOPS4mCqje6SA3jptw&s",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRXQJM00lEnFIcSdjEl02AJW-T7jk6kj9H3lg2_pmv46CSRm2ScCQMA3mUTA&s",
  },
  {
    id: 2,
    name: "Jeff Bezoz",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHl1kkJPaDt0VWuVLsxAaDZUjMspY0G5pLwEY-t7TvlxiZqfQYWLBMCtR6dA&s",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayiHdqKgf7q6mxzSGZZEJxrGOxaKUVEamAjchLAvd6ugLiNgWduzFGRVgiw&s",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZblSHqAJ9UDS8nSbQd7HoNNtIWne1x0KMDAUX_TXfWl3uImsVZR26o4HPQ&s",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoA6uehGPjqsjmmSDLA6VEg4ttbG38s4_4FJ6gnoFQYulxxpjIab7WnFTcqQ&s",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKldsJN54lIUGCSBevYUotSaDXN2A19bUqOySBrGI1dDyqbhvMcR5V0IUj9g&s",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J4gysdR1_0zbsLAb4ee07kW9nNrzpZZ3lc-MdYg5f8_a7rNB7d7MGuLxYw&s",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
