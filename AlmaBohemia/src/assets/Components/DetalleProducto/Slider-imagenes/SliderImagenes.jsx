import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function SliderImagenes({ imagenes }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 8,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="carousel-detail">
        <div ref={sliderRef} className="keen-slider slider-principal">
          {imagenes.map((img, i) => (
            <div className="keen-slider__slide" key={i}>
              <img src={img} alt={`Imagen ${i}`} />
            </div>
          ))}
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {imagenes.map((img, i) => (
            <div className="keen-slider__slide" key={i}>
              <img src={img} alt={`Imagen ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
