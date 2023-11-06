import * as React from "react";
import styles from "./table.module.css";
import { dataDelivery } from "../../../data/data";
import { LoadingComponents } from "../../loading/loading";

// Material UI
import { Button } from "@mui/material";


const Card = ({ data }) => {
  const [showDetail, setShowDetail] = React.useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className={styles.allWrap}>
    <div className={styles.wrap}>
      <div className={styles.data}>
        <div className={styles.fill}>
          <h6 className={styles.row}>No Invoice</h6>
          <p className={styles.col}>{data.no_Do}</p>
        </div>

        <div className={styles.fill}>
          <h6 className={styles.row}>Pembeli</h6>
          <p className={styles.col}>{data.pembeli}</p>
        </div>

        <div className={styles.fill}>
          <h6 className={styles.row}>Tanggal Invoice</h6>
          <p className={styles.col}>{data.metode_pengiriman}</p>
        </div>

        <div className={styles.fill}>
          <h6 className={styles.row}>Alamat Penagih</h6>
          <p className={styles.col}>{data.status_pesanan}</p>
        </div>

        <div className={styles.fill}>
          <h6 className={styles.row}>Status Pesanan</h6>
          <p className={styles.col}>{data.tanggal_pembuatan}</p>
        </div>
      </div>
      <div className={styles.btn}>
      <Button variant="contained" size="small" className={styles.btn_detail} onClick={toggleDetail}>
      {showDetail ? 'Tutup Detail' : 'Lihat Detail'}
      </Button>
      </div>
      </div>

      {/* <div className={styles.detailPage}></div> */}
      
      {showDetail && (
        <div className={styles.detail_content}>
          <div className={styles.historySect}>Detail Pesanan</div>
          {data.detail_pesanan_produk.map((detailProduct, index) => (
            <div className={styles.history} key={index}>
            
             <div className={styles.fill}>
                <h6 className={styles.row}>Produk</h6>
                <p className={styles.col}>{detailProduct.product}</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 1</h6>
                <p className={styles.col}>{detailProduct.kuantitas_1}</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 2</h6>
                <p className={styles.col}>{detailProduct.kuantitas_2}</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 3</h6>
                <p className={styles.col}>{detailProduct.kuantitas_3}</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Total</h6>
                <p className={styles.col}>1111111111</p>
            </div>
            <hr />
          </div>
          ))}
        </div>
      )}
    
    </div>
  );
};

const InvoiceAdd = () => {
  const [visibleCards, setVisibleCards] = React.useState(5);
  const [isLoading, setIsLoading] = React.useState(false);
  const [allDataLoaded, setAllDataLoaded] = React.useState(false);

  const loadMoreCards = () => {
    setIsLoading(true);

    // Misalnya, Anda dapat mengambil lebih banyak data dari array dataDelivery.rows
    setTimeout(() => {
      const newVisibleCards = visibleCards + 5;
      if (newVisibleCards >= dataDelivery.rows.length) {
        setAllDataLoaded(true);
      }
      setVisibleCards(newVisibleCards);
      setIsLoading(false);
    }, 3000); // Misalnya, waktu tunggu 1 detik
  };

  // Gunakan useRef untuk mengamati elemen yang muncul di dalam viewport
  const observerRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Pemicu ketika elemen mendekati viewport
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [allDataLoaded]);

  const totalData = dataDelivery.rows.length;
  // const startIndex = visibleCards - 4; // Misalnya, mulai dari 1 jika visibleCards adalah 5
  // const endIndex = Math.min(visibleCards, totalData);
  const startIndex = Math.min(1, visibleCards - 4);
const endIndex = Math.min(visibleCards, totalData);

  return (
    <div className={styles.invoiceAdd}>
     
      {dataDelivery.rows.slice(0, visibleCards).map((data, index) => (
        <Card data={data} key={index} />
      ))}
      
      <div ref={observerRef}></div>
      <div className={styles.info}>
      {isLoading && <div className={styles.loading}><LoadingComponents/></div>
      }
        {`Data ${startIndex}-${endIndex} dari ${totalData} data`}
      </div>
    </div>

    
  );
};

export default InvoiceAdd;
