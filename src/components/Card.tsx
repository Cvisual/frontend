import { Empresas } from "../interface";

const Card = (props: Empresas) => {
  const empresa = props.item
  return (
    <div className="shadow-xl p-4 rounded-xl">
      <p className="border-b-2 border-gray uppercase font-bold mb-4">{empresa.nombre}</p>
      <p className="mb-4 break-all">
        <span className="font-bold uppercase">Descripción:</span>
        <br />
        {empresa.descripcion}</p>
      <p className="mb-4 break-all">
        <span className="font-bold uppercase">Historia:</span>
        <br />
        {empresa.historia}</p>
      <p className="uppercase"><b>Fecha: </b>{new Intl.DateTimeFormat("es").format(new Date(empresa.fecha))}</p>
    </div>
  )
}

export default Card;