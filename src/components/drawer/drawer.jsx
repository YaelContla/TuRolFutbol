/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useState } from "react";

import styles from "../drawer/drawer.module.scss";

// Material UI
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu"; // Importa el icono de hamburguesa

// React bootstrap
import Accordion from "react-bootstrap/Accordion";

const drawer = () => {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Fuerzas",
      content: ["Premier", "Especial", "Primer", "Segunda"],
    },
    // Puedes agregar más elementos de menú aquí
  ]);

  return (
    <>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "black" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className={styles.containerDrawer}>
              <div>
                <p className={styles.titulo}>
                  LIGA DE FUTBOL AMATEUR DEL VALLE DE TEOTIHUACÁN, A.C.
                </p>
              </div>
              <div class={styles.divider}></div>
              <Accordion
                className={styles.customAccordion}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={styles.accordionHeader}>
                    Fuerzas
                  </Accordion.Header>
                  <Accordion.Body className={styles.accordionBody}>
                    <ul className={styles.listaFuerzas}>
                      <li>Premier</li>
                      <li>Primera Especial</li>
                      <li>Primera</li>
                      <li>Segunda</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default drawer;
