const { calcularBoleta } = require('./calcularIMC');

const monto = 20;
const boleta = calcularBoleta(monto);

console.log("");
console.log("       DEMOMIFACT");
console.log("    EMPRESA DEMO SAC");
console.log("    RUC: 20100010100");
console.log("    CALLE LAS NORMAS 123");
console.log("      Tel: 987 654 321");
console.log("Correo: Administrador@facturas.net");
console.log("   Web: www.facturas.net");
console.log("");
console.log("BOLETA DE VENTA ELECTRONICA");
console.log("      B002 - 10300866");
console.log("");
console.log("       CAMILO SANCHEZ");
console.log("        DNI 71262017");
console.log("------------------------------------------");
console.log("FECHA: 28/10/2026    HORA: 11:27 AM");
console.log("------------------------------------------");
console.log("Cant. U.M.  DESCRIPCION       PRECIO TOTAL");
console.log("------------------------------------------");
console.log("1 UNIDAD    POLO BASICO");
console.log("            TALLA SMALL        20.00 20.00");
console.log("------------------------------------------");
console.log("TOTAL GRAVADO (S/)       " +
    boleta.subtotal.toFixed(2));
console.log("I.G.V. (S/)               " +
    boleta.igv.toFixed(2));
console.log("------------------------------------------");
console.log("TOTAL (S/)               " +
    boleta.total.toFixed(2));
console.log("------------------------------------------");
console.log("SON: VEINTE CON 00/100 SOLES");
console.log("FORMA DE PAGO: EFECTIVO");
console.log("COND. VENTA: CONTADO");
console.log("Observaciones:");
console.log("");
console.log("Representacion impresa de la boleta");
console.log("        VENTA ELECTRONICA");
console.log("   Puede consultar en WWW.MIFACT.NET");
console.log("");

