import { group } from "../../../data/data";
import { CardGroup } from "../../Molekul/card/card";
import styles from "./group.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ava from '../../../assets/images/avatar-1.png'

const GroupGrid = () => {
  return (
    <div className={styles.grid}>
      {group.map((x) => (
        <CardGroup name={x.name} member={x.member} />
      ))}
    </div>
  );
};

const GroupContainer = () => {
  const [isActive, setIsActive] = useState({
    button1: true,
    button2: false,
    button3: false,
  });

  const toggleActive = (button) => {
    const newActiveState = {
      button1: false,
      button2: false,
      button3: false,
    };
    newActiveState[button] = true;

    setIsActive(newActiveState);
  };

  const [active, setActive] = useState("0");

  const handlePage = (page) => {
    setActive(page);
  };

  return (
    <div className={styles.groupContainer}>
      <div className={styles.headInvoice}>
        <h2 className={styles.headInvoice}>Group</h2>
        <div className={styles.hr}></div>
        <div className={styles.wrapHeadgroup}>
          <div className={styles.btnHeadGroup}>
            <Button className={styles.btnBiruGelap} variant="contained">
              Import Payments
            </Button>
            <Button className={styles.grey} variant="contained">
              Tambah Payments
            </Button>
          </div>
        </div>
        <div className={styles.cardHeadGroup}>
          <div
            className={`${styles.cardDataGroup} ${
              isActive.button1 ? styles.cardDataGroupActive : styles.deactive
            }`}
            onClick={() => {
              toggleActive('button1')
              handlePage("0")
            }}
          >
            <p className={styles.pCard}>Menunggu Konfirmasi Partnership :</p>

            <div className={styles.nilaiCard}>10</div>
          </div>
          <div
            className={`${styles.cardDataGroup} ${
              isActive.button2 ? styles.cardDataGroupActive : styles.deactive
            }`}
            onClick={() => {
              toggleActive('button2')
              handlePage("1")
            }}
          >
            <p className={styles.pCard}>Permintaan Partners :</p>

            <div className={styles.nilaiCard}>25</div>
          </div>
          <div
            className={`${styles.cardDataGroup} ${
              isActive.button3 ? styles.cardDataGroupActive : styles.deactive
            }`}
            onClick={() => {
              toggleActive('button3')
              handlePage("2")
            }}
          >
            <p className={styles.pCard}>Undangan Partnership : </p>

            <div className={styles.nilaiCard}>84</div>
          </div>
        </div>
        <div className={styles.detailCardGroup}>
          <div className={styles.listDetailGroup}>
            <div className={styles.wrapListActive}>
            <div className={isActive.button1 ? styles.listActive : styles.listDeActive}></div>
          <div className={isActive.button2 ? styles.listActive : styles.listDeActive}></div>
          <div className={isActive.button3 ? styles.listActive : styles.listDeActive}></div>
            </div>
            
            {active === "0" && (<div className={styles.content}>
            <TotalKonfirmasi/>
            </div>)}
            {active === "1" && (<div className={styles.content}>
            <RequestPartners/>
            </div>)}
            {active === "2" && (<div className={styles.content}>
            <InvitePartners/>
            </div>)}
            
          </div>
        </div>
      </div>

      <GroupGrid />
    </div>
  );
};

const TotalKonfirmasi = () => {
  return(
    <div className={styles.head}>
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Ikhsan</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    {/*  */}
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Ikhsan</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    </div>
  )
}

const RequestPartners = () => {
  return(
    <div className={styles.head}>
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Haris</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    {/*  */}
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Haris</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    </div>
  )
}

const InvitePartners = () => {
  return(
    <div className={styles.head}>
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Topa</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    {/*  */}
    <div className={styles.totalKonfirmasi}>
      <div className={styles.wrapTotalKonfirmasi}>
        <div className={styles.wrapLeft}>
        <img className={styles.ava} src={ava} alt="ava"></img>
        <div className={styles.wrapText}>
          <h5 className={styles.nameKonfirmasi}>Topa</h5>
          <p className={styles.messageKonfirmasi}>Hallo, Mari berteman dengan saya</p>
        </div>
        </div>
        <div className={styles.btnKonfirmasi}><NotificationImportantOutlinedIcon fontSize="16"/></div>
      </div>
    </div>
    </div>
  )
}


export { GroupContainer, GroupGrid, TotalKonfirmasi, RequestPartners, InvitePartners };
