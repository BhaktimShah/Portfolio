import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const Modal = ({ handleClose, handleImg, imgPath }) => {
  console.log("Oath ", imgPath);
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.img
          className="card-image"
          src={imgPath}
          alt=""
          initial={false}
          animate={
            " x: 0, y: 0 "
          }

        />
        
        <p>
          <img src={imgPath} alt="" />
        </p>
        <button onClick={handleClose} className="modal_close">
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
