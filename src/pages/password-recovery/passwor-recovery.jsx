import { useState } from "react";
import styles from "./password-recover.module.css";
import { Button, TextField } from "@mui/material";
import lupaSandi1 from "../../assets/images/lupa-sandi-1.png";
import lupaSandi2 from "../../assets/images/lupa-sandi-2.png";
import lupaSandi3 from "../../assets/images/lupa-sandi-3.png";
import otp from "../../assets/images/otp-andaru.png";
import gantiPass from "../../assets/images/gantipss-andaru.png";

const PassRecovery = () => {
  const [ganti, setGanti] = useState(0);

  const handleRecovery = (page) => {
    setGanti(page);
  };
  return (
    <div className={styles.PassRecovery}>
      {ganti === 0 && (
        <div className={styles.form_recovery}>
          <div className={styles.wrap_passrecovery}>
            <h2 className={styles.lupa_kata_sandi}>Lupa Kata Sandi</h2>
            <p className={styles.desc}>
              Kami akan mengirimi Anda untuk <br />
              mengatur ulang kata sandi anda
            </p>
            <div className={styles.input_btn}>
              <TextField
                id="outlined-basic"
                label="Masukan Email"
                variant="outlined"
                size="small"
              />
              <Button
                onClick={() => handleRecovery(1)}
                variant="contained"
                className={styles.btn_kirim}
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
      )}

      {ganti === 1 && (
        <div className={styles.form_recovery}>
          <div className={styles.wrap_passrecovery}>
            <div className={styles.wrap_otp}>
              <div className={styles.wrap_otpSec}>
                <h2 className={styles.lupa_kata_sandi}>OTP</h2>
                <p className={styles.desc}>Resend kode OTP</p>
                <p className={styles.descs}>00:59</p>
                <div className={styles.input_btn}>
                  <div className={styles.kode_otp}>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      className={styles.input_otp}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      className={styles.input_otp}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      className={styles.input_otp}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      className={styles.input_otp}
                    />
                  </div>
                  <Button
                    onClick={() => handleRecovery(2)}
                    variant="contained"
                    className={styles.btn_otp}
                  >
                    Kirim
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {ganti === 2 && (
        <div className={styles.form_recovery}>
          <div className={styles.wrap_passrecovery}>
            <h2 className={styles.lupa_kata_sandi}>Buat Kata Sandi Baru</h2>
            <div className={styles.input_btn}>
              <TextField
                id="outlined-basic"
                label="Masukan Kata Sandi Lama"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="Masukan Kata Sandi Baru"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="Konfirmasi Kata Sandi Baru"
                variant="outlined"
                size="small"
              />
              <Button
                onClick={() => handleRecovery(0)}
                variant="contained"
                className={styles.btn_kirim}
              >
                Ganti Sandi
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.img_recovery_satu}>
        {ganti === 0 && <div>
            <img className={styles.img1} src={lupaSandi1} alt="" />
            <img className={styles.img2} src={lupaSandi2} alt="" />
            <img className={styles.img3} src={lupaSandi3} alt="" />
            </div>}
        {ganti === 1 && <img src={otp} alt="" />}
        {ganti === 2 && <img src={gantiPass} alt="" />}
      </div>
    </div>
  );
};

export default PassRecovery;
