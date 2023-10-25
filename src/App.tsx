import useSWR from "swr";
import { Galeria } from "./interface";
import CardGaleria from "./components/CardGaleria";

const App = () => {
  const { data: galerias } = useSWR(import.meta.env.VITE_URL + '/galerias/empresa/1');

  return (
    <div className="flex w-12/12 h-screen gap-4 justify-center items-center">
      {
        galerias?.map((item: Galeria, index: string) => {
          return (
            <div key={index} className="flex flex-row w-3/12 flex-wrap gap-4">
              <CardGaleria item={item} />
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App