export default {
  mounted(el: HTMLElement): void {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      ) as any;
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 300);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries: any, observer: any): void {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver(): void {
      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "0%",
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
