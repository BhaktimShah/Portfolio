import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Items = ({ projectItems }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const close = () => setModalOpen(false);
  const open = (img) => {
    setModalOpen(true);
    setImgPath(img);
  };

  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;

        return (
          <>
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0.8, scale: 0.6 }}
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="portfolio__items card card-two"
              key={id}
            >
              <motion.button className="portfolio__img-wrapper">
                <img
                  src={img}
                  alt=""
                  className="portfolio__img"
                  onClick={() => (modalOpen ? close(img) : open(img))}
                />
              </motion.button>
              <span className="portfolio__category text-cs">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>
            </motion.div>
          </>
        );
      })}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} imgPath={imgPath} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Items;
