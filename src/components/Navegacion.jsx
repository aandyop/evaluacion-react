import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Navegacion() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ChronoReact</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Acceder al Catálogo</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Inicio
        </NavbarLink>
        <NavbarLink href="#">Nosotros</NavbarLink>
        <NavbarLink href="#">Colección</NavbarLink>
        <NavbarLink href="#">Contacto</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
