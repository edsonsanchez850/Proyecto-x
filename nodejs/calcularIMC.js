const IGV = 0.18;

function calcularIGV(monto) {
    return monto - monto / (1 + IGV);
}

function calcularFactura(monto) {
    const igv = calcularIGV(monto);
    const subtotal = monto - igv;
    const total = monto;

    return { subtotal, igv, total };
}

function calcularBoleta(monto) {
    return calcularFactura(monto);
}

module.exports.calcularIGV = calcularIGV;
module.exports.calcularFactura = calcularFactura;
module.exports.calcularBoleta = calcularBoleta;


