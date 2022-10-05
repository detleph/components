import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Drawer.module.scss";
import { OutsideElement } from "../OutsideElement/OutsideElement";

interface DrawerProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => unknown;
}

const Drawer: React.FC<DrawerProps> = ({ open, children, onClose }) => {
  return (
    <OutsideElement open={open} onClose={onClose}>
      <UIDrawer>{children}</UIDrawer>
    </OutsideElement>
  );
};

const UIDrawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className={styles.drawer}
      initial={{ y: "100vh" }}
      animate={{ y: "0%" }}
      exit={{ y: "100vh" }}
      transition={{ type: "tween" }}
    >
      {children}
    </motion.div>
  );
};

export default Drawer;
