import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-x-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* InputBox */}
        <InputBox />
        {/* Post */}
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;