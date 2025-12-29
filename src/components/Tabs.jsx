import { useDispatch, useSelector } from "react-redux";
import { setactiveTab } from "../sclices/searchSlice";

const Tabs = () => {
  const tabsdata = ["Photo", "Viedo", "GIF"];
  const dispatch=useDispatch();
  const selector=useSelector((state)=> state.search.activeTab)
  return (
    <div className="flex justify-center gap-3 mt-5">
  {tabsdata.map((elem, indx) => {
    return (
      <button
        key={indx}
        className={`
          px-5 py-2 rounded-full text-lg font-medium text-white
          transition-all duration-200
          ${
            selector === elem
              ? "bg-blue-600 shadow-md scale-105"
              : "bg-emerald-500 hover:bg-emerald-600"
          }
          active:scale-95
        `}
        onClick={() => {
          dispatch(setactiveTab(elem));
        }}
      >
        {elem}
      </button>
    );
  })}
</div>

  );
};

export default Tabs;
