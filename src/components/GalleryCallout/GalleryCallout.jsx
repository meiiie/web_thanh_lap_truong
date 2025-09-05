'use client';
import React, { memo } from 'react';
import Copy from '../Copy/Copy';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

const GalleryCallout = memo(() => {
  return (
    <section className="gallery-callout">
      <div className="container">
        <div className="gallery-callout-col">
          <div className="gallery-callout-row">
            <div className="gallery-callout-img gallery-callout-img-1">
              <img src="/gallery-callout/gallery-callout-1.jpg" alt="VMU Campus" />
            </div>
            <div className="gallery-callout-img gallery-callout-img-2">
              <img src="/gallery-callout/gallery-callout-2.jpg" alt="Students" />
              <div className="gallery-callout-img-content">
                <h3>70+</h3>
                <p>Năm lịch sử</p>
              </div>
            </div>
          </div>
          <div className="gallery-callout-row">
            <div className="gallery-callout-img gallery-callout-img-3">
              <img src="/gallery-callout/gallery-callout-3.jpg" alt="Research" />
            </div>
            <div className="gallery-callout-img gallery-callout-img-4">
              <img src="/gallery-callout/gallery-callout-4.jpg" alt="Graduation" />
            </div>
          </div>
        </div>
        <div className="gallery-callout-col">
          <div className="gallery-callout-copy">
            <Copy delay={0.1}>
              <h3>
                Khám phá kho tàng hình ảnh ghi lại hành trình 70 năm phát triển 
                của trường. Từ những ngày đầu thành lập đến hiện tại, mỗi hình 
                ảnh kể một câu chuyện về sự trưởng thành và thành công.
              </h3>
            </Copy>
            <AnimatedButton label="Khám phá thư viện" route="/70-nam" />
          </div>
        </div>
      </div>
    </section>
  );
});

GalleryCallout.displayName = 'GalleryCallout';

export default GalleryCallout;
