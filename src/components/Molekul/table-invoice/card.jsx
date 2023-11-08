import { Button } from "@mui/material";
import styles from "./table.module.css";
import * as React from "react";
import { useState } from "react";
import Select from "react-select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
  { value: "haris", label: "Haris" },
  { value: "ikhsan", label: "Ikhsan" },
  { value: "topa", label: "Topa" },
];

const AddInvoice = ({ handleInvoice }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className={styles.addInvoice}>
      <h2 className={styles.headInfo}>Informasi Tagihan</h2>
      <div className={styles.prev}>
        <Button
          onClick={() => {
            handleInvoice(0);
          }}
          className={styles.btn_next}
          variant="contained"
        >
          <ArrowBackIcon />
        </Button>
      </div>
      <div className={styles.wrap_form}>
        <div className={styles.left}>
          {/* NAMA PELANGGAN */}
          <div className={styles.nama_pelanggan}>
            <div className={styles.label_form}>Nama Pelanggan</div>
            <Select
              id="select"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder={"Pilih/Masukan Nama Pelanggan"}
            />
          </div>
          {/* INVOICE REASON */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Invoice Reason</div>
            <Select
              id="select"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder={"Pilih Invoice Reason"}
            />
          </div>
          {/* NOMOR INVOICE */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Nomor Invoice</div>
            <input
              className={styles.input}
              placeholder="Masukan Nomor Invoice"
              type="text"
            />
          </div>
          {/* NOMOR REFERENSI INVOICE */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Nomor Referensi Invoice</div>
            <input
              className={styles.input}
              placeholder="Masukan Nomor Referensi Invoice"
              type="text"
            />
          </div>
          {/* MATA UANG */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Mata Uang</div>
            <Select
              id="select"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder={"Pilih Mata Uang"}
            />
          </div>
          {/* TANGGAL INVOICE */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>tanggal Invoice</div>
            <input className={styles.input} type="date" name="" id="" />
          </div>
        </div>
        <div className={styles.right}>
          {/*TEMPO PEMBAYARAN  */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Tempo Pembayaran</div>
            <Select
              id="select"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder={"Pilih Tempo Pembayaran"}
            />
          </div>
          {/* TANGGAL JATUH TEMPO */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Tanggal Jatuh Tempo</div>
            <input className={styles.input} type="date" name="" id="" />
          </div>
          {/* LABEL ALAMAT PENAGIH */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Label Alamat Penagih</div>
            <Select
              id="select"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder={"Pilih Alamat Penagih  "}
            />
            <textarea
              className={styles.textarea}
              style={{ height: 71 }}
              type="text-a"
              name=""
              id=""
            />
          </div>
          {/* NOMOR KONTAK */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Nomor Kontak</div>
            <input className={styles.input} type="text" name="" id="" />
          </div>
          {/* CATATAN */}
          <div className={styles.invoice_reason}>
            <div className={styles.label_form}>Catatan</div>
            <input className={styles.input} type="text" name="" id="" />
          </div>
          <div className={styles.next}>
            <Button
              onClick={() => {
                handleInvoice(2);
              }}
              className={styles.btn_next}
              variant="contained"
            >
              Selanjutnya
              <NavigateNextIcon />
            </Button>
          </div>
        </div>
        {/* <p>
          Selected Value:{" "}
          {selectedOption ? selectedOption.value : "No selection"}
        </p> */}
      </div>
    </div>
  );
};

const DaftarProdukPesanan = ({ handleInvoice }) => {
  return (
    <div className={styles.invoice_pesanan}>
      <h2 className={styles.headInfo}>Daftar Produk Pesanan</h2>
      <div className={styles.prev}>
        <Button
          onClick={() => {
            handleInvoice(1);
          }}
          className={styles.btn_next}
          variant="contained"
        >
          <ArrowBackIcon />
        </Button>
      </div>
      <div className={styles.wrap_invoice_pesanan}>test</div>
    </div>
  );
};

export { AddInvoice, Groupcard, DaftarProdukPesanan };
