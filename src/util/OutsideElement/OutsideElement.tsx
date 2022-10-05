import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./OutsideElement.module.scss";

interface OutsideElementProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => unknown;
}

export const OutsideElement: React.FC<OutsideElementProps> = ({ children, open, onClose }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            key="backdrop"
            onClick={() => onClose?.()}
          ></motion.div>

          {children}
        </>
      )}
    </AnimatePresence>,
    document.querySelector("#detleph-fg-context")!
  );
};
