import React, {useEffect, useState, useContext, useReducer, useMemo} from "react";
import "./Produk.css";

//penggunaan useReducer
const initialTroli = 0

const reducer = (troli, tambahTroli) => {
    switch (tambahTroli) {
        case 'tambah': return troli + 1
        default : return troli
    }
}

//penggunaan useContext
const CartContext = React.createContext();

const Produk = () => {
    const [stock, setStock] = useState(10);
    const [disabled, setDisabled] = useState(false);
    const [status, setStatus] = useState("Beli Sekarang");
    const [keranjang, setKeranjang] = useState(0);
    const [showGambar, setShowGambar] = useState(true);
    const [count, dispatch] = useReducer(reducer, initialTroli)
    
    //Penggunaan dengan useMemo
    const hideGambar = useMemo (() => {
        return {
            display : showGambar ? 'flex' : 'none'
        }
    }, [showGambar])


    //penggunaan useEffect
    useEffect(() => {
        if (stock > -1 && stock < 100) {
            alert(`Peringatan dengan useEffect! Pembelian berhasil`);
        }
    }, [stock]);

    //pengubahan state dengan useState
    const tombolBeli = () => {
        setStock(stock - 1);
        if (stock === 1) {
            setDisabled(true);
            setStatus("Habis");
        }
        
    }



    return (
        <CartContext.Provider value={{ keranjang, setKeranjang}}> 
            <div className="Main">
                <h1 className="Text">Hair Mask</h1>
                {/* Render useMemo */}
                <button className="Button1" onClick={() => setShowGambar(prevShowGambar => !prevShowGambar)}> Tampilan Gambar menggunakan useMemo
                </button>
                <br></br>
                <img className="ViewImage"
                style={hideGambar}
                src="http://3.bp.blogspot.com/-z204SE20ZTA/UiFVahlDP4I/AAAAAAAAAA4/rif0LJakpgY/s1600/75502_200454973448169_379530841_n+copy.jpg"
                alt=""/>
                {/* Render useState yang mempengaruhi useEffect */}
                <button className="Button2" onClick={tombolBeli} disabled={disabled}>{status}</button>
                <p>(Pembelian dengan useState)</p>
                <p className="Text">Jumlah Stock : {stock}</p>
                {/* Render useContext */}
                <TambahKeranjang />
                <p>(ditambahkan dengan useContext)</p>
                <h1>{keranjang}</h1>
                {/* Render useReducer */}
                <button className="Button3" onClick={()=>dispatch('tambah')}>Tambah Keranjang <i className="fa fa-shopping-cart"></i></button>
                <p>(ditambahkan dengan useReducer)</p>
                <h1>{count}</h1>
            </div>
        </CartContext.Provider>
    )
}

//fungsi untuk menjalankan useContext
function TambahKeranjang() {
    const {keranjang, setKeranjang } = useContext(CartContext);
    const tombolKeranjang = () => {
        setKeranjang(keranjang + 1);
    }
    return (
        <button
        className="Button4" onClick={tombolKeranjang}
        >Tambah Keranjang
        <i className="fa fa-shopping-cart"></i></button>
    );
}

export default Produk