import styles from "./table.module.css";
import * as React from "react";
import { useState } from "react";
import Select from 'react-select'


const Groupcard = () => {
  return (
    <div className={styles.groupCard}>
      <div className={styles.wrap}>
        <div className={styles.data}>
          <div className={styles.fill}>
            <h6 className={styles.row}>No Invoice</h6>
            <p className={styles.col}>11111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Pembeli</h6>
            <p className={styles.col}>111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Tanggal Invoice</h6>
            <p className={styles.col}>1111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Alamat Penagih</h6>
            <p className={styles.col}>11111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Status Pesanan</h6>
            <p className={styles.col}>1111111111</p>
          </div>
        </div>
        <hr />
        <div className={styles.history}>
          <div className={styles.historySect}>Detail Pesanan</div>
          <div className={styles.fill}>
            <h6 className={styles.row}>Produk</h6>
            <p className={styles.col}>1111111111</p>
          </div>
          <div className={styles.fill}>
            <h6 className={styles.row}>Kuantitas 1</h6>
            <p className={styles.col}>1111111111</p>
          </div>
          <div className={styles.fill}>
            <h6 className={styles.row}>Kuantitas 2</h6>
            <p className={styles.col}>1111111111</p>
          </div>
          <div className={styles.fill}>
            <h6 className={styles.row}>Kuantitas 3</h6>
            <p className={styles.col}>1111111111</p>
          </div>
          <div className={styles.fill}>
            <h6 className={styles.row}>Total</h6>
            <p className={styles.col}>1111111111</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const options = [
  { value: 'haris', label: 'Haris'},
  { value: 'ikhsan', label: 'Ikhsan' },
  { value: 'topa', label: 'Topa' }
]

const AddInvoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className={styles.addInvoice}>
      <h2 className={styles.headInfo}>Informasi Tagihan</h2>
      <div className={styles.wrap_form}>
      <label>Nama Pelanggan</label>
      <Select
        id="select"
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
      <p>Selected Value: {selectedOption ? selectedOption.value : "No selection"}</p>
      </div>
    </div>
  );
};

export { AddInvoice, Groupcard };









