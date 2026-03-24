"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { libraryItems } from "@/data/site-content";
import "./LibraryGallery.css";

const categories = ["Tất cả", ...new Set(libraryItems.map((item) => item.category))];

export default function LibraryGallery() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return libraryItems;
    }

    return libraryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <>
      <div className="library-gallery__filters" data-reveal>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? "is-active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="library-gallery__grid" data-stagger>
        {filteredItems.map((item, index) => (
          <button
            key={`${item.category}-${item.title}`}
            type="button"
            className={`library-gallery__card ${index % 5 === 0 ? "is-featured" : ""}`}
            onClick={() => setActiveItem(item)}
            data-item
          >
            <span className="library-gallery__image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw"
                className="library-gallery__image-media"
              />
            </span>
            <span className="library-gallery__meta">
              <span>{item.category}</span>
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="library-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="library-gallery__lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="library-gallery__close"
              onClick={() => setActiveItem(null)}
            >
              Đóng
            </button>
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              width={1600}
              height={1100}
              className="library-gallery__lightbox-media"
            />
            <div className="library-gallery__lightbox-copy">
              <span>{activeItem.category}</span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
