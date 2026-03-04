import React from "react";
import { CartuchoZeroView } from "@ui/views/CartuchoZeroView";

/**
 * CartuchoZeroPage — Vista oficial cuando no hay módulos instalados.
 * 
 * Reutiliza la vista compartida.
 */
export default function CartuchoZeroPage() {
    return <CartuchoZeroView hideBreadcrumbs={true} />;
}
