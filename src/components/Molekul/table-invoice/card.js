import styles from "./table.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const AddInvoice = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.addInvoice}>
      <h2 className={styles.headInfo}>Informasi Tagihan</h2>
      <div className={styles.wrap_form}>
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />


        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />

        
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
        <p className={styles.labelForm}>Tentukan Nama Pelanggan</p>
        <TextField
          className={styles.inputForm}
          id="outlined-basic"
          label="Nama Pelanggan"
          variant="outlined"
          size="small"
        />
      </div>
    </div>
  );
};

export { AddInvoice, Groupcard };
