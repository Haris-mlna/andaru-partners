import { useState } from "react";
import styles from "./password-recover.module.css";
import { Button, TextField } from "@mui/material";
import lupaSandi1 from "../../assets/images/lupa-sandi-1.png";
import lupaSandi2 from "../../assets/images/lupa-sandi-2.png";
import lupaSandi3 from "../../assets/images/lupa-sandi-3.png";
import gantipass1 from "../../assets/images/gantipss-andaru-1.png";
import gantipass2 from "../../assets/images/gantipss-andaru-2.png";
import gantipass3 from "../../assets/images/gantipss-andaru-3.png";
import otp from "../../assets/images/otp-andaru.png"

const PassRecovery = () => {
  const [ganti, setGanti] = useState(0);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRecovery = (page) => {
    setGanti(page);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === "password1") {
      setPassword1(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
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
              <form className={styles.btn_form} action="">
                <TextField
                  id="outlined-basic"
                  label="Masukan Email"
                  variant="outlined"
                  size="small"
                />
                <Button
                  onClick={(e) => {
                    handleRecovery(1);
                    e.preventDefault();
                  }}
                  variant="contained"
                  className={styles.btn_kirim}
                >
                  Kirim
                </Button>
              </form>
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
                    <input
                      id="outlined-basic"
                      size="small"
                      type="text"
                      maxLength={"1"}
                      className={styles.input_otp}
                    />
                    <input
                      id="outlined-basic"
                      size="small"
                      type="text"
                      maxLength={"1"}
                      className={styles.input_otp}
                    />
                    <input
                      id="outlined-basic"
                      size="small"
                      type="text"
                      maxLength={"1"}
                      className={styles.input_otp}
                    />
                    <input
                      id="outlined-basic"
                      size="small"
                      type="text"
                      maxLength={"1"}
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
                label="Masukan Kata Sandi Baru"
                variant="outlined"
                size="small"
                name="password1"
                onChange={handlePasswordChange}
                value={password1}
                type="password"
              />
              <TextField
                id="outlined-basic"
                label="Konfirmasi Kata Sandi Baru"
                variant="outlined"
                size="small"
                name="password2"
                onChange={handlePasswordChange}
                value={password2}
                type="password"
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
        {ganti === 0 && (
          <div>
            <img className={styles.img1} src={lupaSandi1} alt="" />
            <img className={styles.img2} src={lupaSandi2} alt="" />
            <img className={styles.img3} src={lupaSandi3} alt="" />
          </div>
        )}
        {ganti === 1 && (<img className={styles.wrap_otp_pict} src={otp} alt="" />)}
        {ganti === 2 && (
          <div className={styles.gembok}>
            <img className={styles.gantipass1} src={gantipass1} alt="" style={{
                top: password1 === password2 ? -120 : -170,
              }} />
            <img className={styles.gantipass2} src={gantipass2} alt="" style={{
                top: password1 === password2 ? 130 : 250,
              }} />
            <img className={styles.gantipass3} src={gantipass3} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PassRecovery;
