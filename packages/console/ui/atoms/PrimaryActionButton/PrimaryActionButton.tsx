import { Button } from "../Button/Button";
import { ComponentProps } from "react";

/**
 * PrimaryActionButton — Blindaje del botón de acción principal del sistema.
 * 
 * Este componente asegura que todas las acciones principales (Guardar, Crear, Agregar, Confirmar)
 * mantengan la consistencia visual oficial: variant="actionPrimary" y size="sm".
 */
export function PrimaryActionButton(props: ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      variant="actionPrimary"
      size="sm"
    />
  );
}
