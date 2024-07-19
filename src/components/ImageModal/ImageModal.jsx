import ReactModal from "react-modal";
import css from './ImageModal.module.css'

ReactModal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, image }) {
   const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  if (!image) {
    return null; 
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
    >
      <div className={css.content} onClick={handleOverlayClick}>
        <img src={image.url} alt={image.description} className={css.image} />
        <div>
          <p>{image.description}</p>
          <p>{image.author}</p>
          <p>{image.likes} likes</p>
        </div>
      </div>
    </ReactModal>
  );
}