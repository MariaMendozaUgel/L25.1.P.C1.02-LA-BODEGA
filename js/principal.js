import Cl_articulo from "./Cl_articulo.js";
import Cl_bodega from "./Cl_bodega.js";

let articulo1 = new Cl_articulo(10),
    articulo2 = new Cl_articulo(20),
    articulo3 = new Cl_articulo(14),
    articulo4 = new Cl_articulo(6),
    articulo5 = new Cl_articulo(4),
    bodega= new Cl_bodega()

    bodega.procesarArticulo(articulo1)
    bodega.procesarArticulo(articulo2)
    bodega.procesarArticulo(articulo3)
    bodega.procesarArticulo(articulo4)
    bodega.procesarArticulo(articulo5)  

    alert(`La ganancia sera de Bs.${bodega.totalGanancia()}`)
