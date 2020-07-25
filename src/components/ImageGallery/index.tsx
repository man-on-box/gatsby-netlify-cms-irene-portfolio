import React, { FC, useState } from "react";
import cx from "classnames";
import PreviewCompatibleImage from "@components/PreviewCompatibleImage";
import { getAlternatingColumnSizes } from "@src/lib/getAlternatingColumnSizes";
import { ChildImageSharp } from "types/ImageInfo";

interface ImageModalProps {
  show: boolean;
  onHide: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ children, show, onHide }) => {
  return (
    <div className={cx("modal", show ? "is-active" : "")}>
      <div className="modal-background" onClick={() => onHide()}></div>
      <div className="modal-content">
        <span className="image">{children}</span>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => onHide()}
      ></button>
    </div>
  );
};

interface ImageGalleryProps {
  galleryImages: {
    childImageSharp: ChildImageSharp;
    image: string;
  }[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ galleryImages }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { getColumnSizeClassName } = getAlternatingColumnSizes();

  const showImage = (i: number) => {
    setSelectedImageIndex(i);
    setShowModal(true);
  };

  if (!galleryImages || !galleryImages.length) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {galleryImages.map((image, i) => (
            <div key={i} className={cx("column", getColumnSizeClassName())}>
              <div onClick={() => showImage(i)}>
                <PreviewCompatibleImage
                  style={{ height: "375px", cursor: "pointer" }}
                  imageInfo={image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageModal show={showModal} onHide={() => setShowModal(false)}>
        <PreviewCompatibleImage
          imageInfo={{
            childImageSharp: galleryImages[selectedImageIndex]?.childImageSharp,
            image: galleryImages[selectedImageIndex],
          }}
        />
      </ImageModal>
    </section>
  );
};

export { ImageGallery, ImageGalleryProps };
