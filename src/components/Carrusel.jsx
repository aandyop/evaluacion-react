
import { Carousel } from "flowbite-react";

export default function Carrusel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <img src="/reloj1.jpg" alt="..." />
        <img src="/reloj2.jpg" alt="..." />
        <img src="/reloj3.jpg" alt="..." />
        <img src="/reloj4.jpg" alt="..." />
        <img src="/reloj5.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
