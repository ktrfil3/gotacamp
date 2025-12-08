import React from "react";
import { motion } from "framer-motion";

// No necesitamos importar CSS específico si solo vamos a usar opacidad,
// a menos que tengas estilos globales allí.
// import "./Transition.css"; 

const Transition = (OgPage) => {
  return () => (
    <motion.div
      // Estado inicial: Invisible
      initial={{ opacity: 0 }} 
      // Estado animado: Totalmente visible (Fade In)
      animate={{ opacity: 1 }} 
      // Estado al salir: Invisible (Fade Out)
      exit={{ opacity: 0 }} 
      // Configuración de tiempo y suavidad
      transition={{ duration: 0.5, ease: "easeInOut" }}
      
      // Aseguramos que ocupe el espacio correcto (opcional, depende de tu layout)
      style={{ width: "100%", height: "100%" }} 
    >
      <OgPage />
    </motion.div>
  );
};

export default Transition;