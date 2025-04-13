import { getMonth } from "./utils/dayMatrix";
import { Month, Sidebar, CalendarHeader } from "./components";
import { useSelector } from "react-redux";

function App() {
  const month = useSelector((state) => state.calender.month);
  console.log(month)
  const currMonth = getMonth(month);
  return (
    <>
      <main className="w-full min-h-screen flex flex-row bg-gray-50 border">
        <div className="h-full w-[400px] bg-white ">
          <Sidebar className="h-full" />
        </div>
        <div className="h-full w-full">
          <CalendarHeader
    
          />
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Month
              currMonth={currMonth}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
