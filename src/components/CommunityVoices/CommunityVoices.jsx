'use client';
import React, { memo, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Copy from '../Copy/Copy';
import communityVoicesContent from './community-voices-content';
import './CommunityVoices.css';

const CommunityVoices = memo(() => {
  const [activeVoice, setActiveVoice] = useState(0);
  const [visualVoice, setVisualVoice] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const voiceRefs = useRef([]);
  const containerRef = useRef(null);
  const reviewTextRef = useRef(null);
  const splitTextRef = useRef(null);
  const voiceInfoRefs = useRef([]);
  const imageContainerRef = useRef(null);
  const masterTimelineRef = useRef(null);

  const getExpandedWidth = () => {
    if (!containerRef.current) return "10rem";

    const containerWidth = containerRef.current.offsetWidth;
    const padding = 16;
    const gap = 4;
    const inactiveItemWidth = 48;
    const inactiveItems = communityVoicesContent.length - 1;

    const remainingSpace =
      containerWidth -
      padding -
      inactiveItemWidth * inactiveItems -
      gap * inactiveItems;

    return `${remainingSpace}px`;
  };

  const animateImageChange = (newImageSrc) => {
    if (!imageContainerRef.current) return;

    const newImg = document.createElement("img");
    newImg.src = newImageSrc;
    newImg.alt = "";
    newImg.style.opacity = "0";

    imageContainerRef.current.appendChild(newImg);

    return gsap.to(newImg, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      onComplete: () => {
        const allImages = imageContainerRef.current.querySelectorAll("img");
        allImages.forEach((img) => {
          if (img !== newImg) {
            img.remove();
          }
        });
      },
    });
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    gsap.set(voiceRefs.current, {
      width: "3rem",
    });

    gsap.set(voiceInfoRefs.current, {
      opacity: 0,
    });

    if (voiceRefs.current[0]) {
      const expandedWidth = getExpandedWidth();
      gsap.to(voiceRefs.current[0], {
        width: expandedWidth,
        duration: 0.75,
        ease: "power4.inOut",
      });
    }

    if (voiceInfoRefs.current[0]) {
      gsap.to(voiceInfoRefs.current[0], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    const initTimer = setTimeout(() => {
      if (reviewTextRef.current) {
        splitTextRef.current = SplitType.create(reviewTextRef.current, {
          type: "lines",
          mask: "lines",
        });

        if (splitTextRef.current && splitTextRef.current.lines) {
          gsap.set(splitTextRef.current.lines, { y: "110%" });
          gsap.to(splitTextRef.current.lines, {
            y: "0%",
            duration: 0.5,
            stagger: 0.05,
            ease: "power4.out",
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (splitTextRef.current) {
        splitTextRef.current.revert();
        splitTextRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!splitTextRef.current) return;

    if (reviewTextRef.current) {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }

      splitTextRef.current = SplitType.create(reviewTextRef.current, {
        type: "lines",
        mask: "lines",
      });

      if (splitTextRef.current.lines) {
        gsap.set(splitTextRef.current.lines, { y: "110%" });

        gsap.to(splitTextRef.current.lines, {
          y: "0%",
          duration: 0.5,
          stagger: 0.05,
          ease: "power4.out",
        });
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (reviewTextRef.current) {
        if (!splitTextRef.current) {
          splitTextRef.current = SplitType.create(reviewTextRef.current, {
            type: "lines",
            mask: "lines",
          });
        }

        if (splitTextRef.current && splitTextRef.current.lines) {
          gsap.set(splitTextRef.current.lines, { y: "110%" });
          gsap.to(splitTextRef.current.lines, {
            y: "0%",
            duration: 0.5,
            stagger: 0.05,
            ease: "power4.out",
          });
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleVoiceClick = (index) => {
    if (index === activeVoice || isAnimating) return;

    if (masterTimelineRef.current) {
      masterTimelineRef.current.kill();
    }

    setIsAnimating(true);

    const expandedWidth = getExpandedWidth();

    masterTimelineRef.current = gsap.timeline();
    const tl = masterTimelineRef.current;

    if (voiceInfoRefs.current[visualVoice]) {
      tl.to(
        voiceInfoRefs.current[visualVoice],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      );
    }

    tl.to(
      voiceRefs.current[activeVoice],
      {
        width: "3rem",
        duration: 0.75,
        ease: "power4.inOut",
      },
      0
    ).to(
      voiceRefs.current[index],
      {
        width: expandedWidth,
        duration: 0.75,
        ease: "power4.inOut",
      },
      0
    );

    tl.call(
      () => {
        setVisualVoice(index);
      },
      [],
      0.2
    );

    tl.to(
      {},
      {
        duration: 0.1,
        onComplete: () => {
          if (voiceInfoRefs.current[index]) {
            const voiceInfoAnim = gsap.to(voiceInfoRefs.current[index], {
              opacity: 0,
              duration: 0,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(voiceInfoRefs.current[index], {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                });
              },
            });
            tl.add(voiceInfoAnim, 0.5);
          }
        },
      },
      0.5
    );

    const imageAnimation = animateImageChange(
      communityVoicesContent[index].image
    );
    tl.add(imageAnimation, 0);

    if (splitTextRef.current && splitTextRef.current.lines) {
      const textOutAnim = gsap.to(splitTextRef.current.lines, {
        y: "-110%",
        duration: 0.5,
        stagger: 0.05,
        ease: "power4.in",
        onComplete: () => {
          setActiveVoice(index);
        },
      });
      tl.add(textOutAnim, 0);
    } else {
      setActiveVoice(index);
    }

    tl.call(() => {
      setTimeout(() => {
        setIsAnimating(false);
        masterTimelineRef.current = null;
      }, 250);
    });
  };

  return (
    <section className="community-voices">
      <div className="container">
        <div className="section-header">
          <Copy delay={0.1}>
            <h2>Tiếng nói từ cộng đồng</h2>
            <p>Những chia sẻ từ cựu sinh viên, đối tác và phụ huynh</p>
          </Copy>
        </div>
        
        <div className="community-voices-wrapper">
          <div className="community-voice-content">
            <div className="community-voice-img" ref={imageContainerRef}>
              <img src={communityVoicesContent[activeVoice].image} alt="" />
            </div>
            <div className="community-voice-copy">
              <h3 ref={reviewTextRef} key={activeVoice}>
                {communityVoicesContent[activeVoice].review}
              </h3>
            </div>
          </div>
          <div className="voices-list" ref={containerRef}>
            {communityVoicesContent.map((voice, index) => (
              <div
                key={voice.id}
                ref={(el) => (voiceRefs.current[index] = el)}
                className={`voice-item ${
                  index === visualVoice ? "active" : ""
                } ${isAnimating ? "animating" : ""}`}
                onClick={() => handleVoiceClick(index)}
              >
                <div className="voice-avatar">
                  <img src={voice.avatar} alt={voice.name} />
                </div>
                {index === visualVoice && (
                  <div
                    className="voice-info"
                    ref={(el) => (voiceInfoRefs.current[index] = el)}
                    style={{ opacity: 0 }}
                  >
                    <p className="voice-name md">{voice.name}</p>
                    <p className="voice-title">{voice.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

CommunityVoices.displayName = 'CommunityVoices';

export default CommunityVoices;
