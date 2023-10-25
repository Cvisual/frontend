export interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  historia: string;
  fecha: Date;
}

export interface Empresas {
  item: Empresa
}

export interface Galeria {
  id: number;
  empresa_id: string;
  descripcion: string;
  imagen: string;
}

export interface Galerias {
  item: Galeria
}