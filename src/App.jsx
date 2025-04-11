import { getMonth } from "./utils/dayMatrix"


function App() {
  const dayMatrix = getMonth();

  console.table(dayMatrix);
  return (
    <>
      <div className='text-amber-400 w-full bg-red-500'>
        hi
      </div>
    </>
  )
}

export default App
