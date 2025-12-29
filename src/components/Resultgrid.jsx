import { useDispatch, useSelector } from "react-redux";
import { fecthapi, gifapi, viedoapi } from "../api/media";
import { seterror, setloading, setresults } from "../sclices/searchSlice";
import { useEffect } from "react";

const Resultgrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (Store) => Store.search
  );
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function data() {
        
        try {
          if (!query) return;
          let res = [];
          dispatch(setloading());
          if (activeTab === "Photo") {
            const data = await fecthapi(query);
            res = data.map((items) => ({
              ID: items.id,
              type: "Photo",
              title: items.alt_description || "Photo",
              url: items.urls.regular,
            }));
          }
          if (activeTab === "Viedo") {
            const data = await viedoapi(query);
            console.log(data);

            res = data.map((items) => ({
              ID: items.id,
              type: "Viedo",
              title: items.alt_description || "Viedo",
              url: items.video_files[1].link,
            }));
            console.log(res);
          }
          if (activeTab === "GIF") {
            const data = await gifapi(query);
            console.log(data);
            res = data.map((items) => ({
              ID: items.created,
              type: "Photo",
              title: items.content_description || "GIF",
              url: items.media_formats.gif.url,
            }));
          }
          dispatch(setresults(res));
        } catch (err) {
          dispatch(seterror(err.message));
        }
      }
      data();
    },
    [query, activeTab]
  );
if (error)
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="text-red-500 text-4xl mb-3">⚠️</div>
      <h2 className="text-xl font-semibold text-gray-700 mb-1">
        Something went wrong
      </h2>
      <p className="text-gray-500 text-sm">
        Please try again after some time.
      </p>
    </div>
  );

 if (loading)
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className="text-gray-600 text-lg font-medium">
        Loading results...
      </p>
    </div>
  );

  return (
    <div
      id="allcardscontainer"
      className="w-full h-full px-6 py-8
             grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
             gap-6"
    >
      {results.map((item, indx) => (
        <div
          key={indx}
          className="bg-white rounded-xl overflow-hidden shadow-md h-70 object-cover
                 hover:shadow-xl transition-shadow duration-300 relative"
        >
          {item.type === "Photo" ? (
            <img
              src={item.url}
              alt={item.title || "media"}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={item.url}
              alt={item.title || "media"}
              autoPlay
              muted
              className="w-full h-full object-cover"
            ></video>
          )}
          <div
            className="absolute bottom-0 left-0 w-full p-4
                bg-gradient-to-t from-black/70 to-transparent"
          >
            <p className="text-sm font-semibold text-white truncate ">
              {item.title || "Untitled"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resultgrid;
