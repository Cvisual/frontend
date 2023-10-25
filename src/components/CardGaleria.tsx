import { Galerias } from "../interface";

const CardGaleria = (props: Galerias) => {
  const galeria = props.item
  return (
    <div className="shadow-xl p-4 rounded-xl">
      <img src={import.meta.env.VITE_URL + `/${galeria.imagen}`} />
      <p className="mb-4 break-all">
        <span className="font-bold uppercase">Descripción:</span>
        <br />
        {galeria.descripcion}</p>
    </div>
  )
}

export default CardGaleria;