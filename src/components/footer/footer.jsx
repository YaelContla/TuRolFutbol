import styles from "../footer/footer.module.css";

import { Typography } from "@mui/material";

const footer = () => {
  return (
    <>
      <Typography
        className={styles.contenedorText}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <div
          className={`${"py-3 d-flex flex-column align-items-center"} ${
            styles.footer
          }`}
        >
          <p>SAN MARTIN DE LAS PIRAMIDES EDO. DE MÉX.</p>
          <p>CAMINO A PALAPA S/N C.P. 55850</p>
          <p>2023</p>
        </div>
      </Typography>
    </>
  );
};

export default footer;
