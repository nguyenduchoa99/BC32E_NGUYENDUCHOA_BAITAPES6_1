tinhDTB = (...e) => {
    let i = 0;
    return (
        e.map((e) => {
            i += parseFloat(e);
        }),
        (i / e.length).toFixed(2)
    );
};
document.getElementById("btnKhoi1").onclick = () => {
    let toan = document.getElementById("inpToan").value,
        ly = document.getElementById("inpLy").value,
        hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
};
document.getElementById("btnKhoi2").onclick = () => {
    let van = document.getElementById("inpVan").value,
        su = document.getElementById("inpSu").value,
        dia = document.getElementById("inpDia").value,
        anh = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = tinhDTB(van, su, dia, anh);
};