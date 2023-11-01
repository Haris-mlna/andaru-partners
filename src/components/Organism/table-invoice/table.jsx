import React, { useState } from "react";
import { dataDelivery } from "../../../data/data";
import styles from "./table.module.css";
import { Button } from "@mui/material";

const Card = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
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
        Lihat Detail
      </Button>
      </div>
      
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
  return (
    <div className={styles.invoiceAdd}>
      {dataDelivery.rows.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
};

export default InvoiceAdd;
