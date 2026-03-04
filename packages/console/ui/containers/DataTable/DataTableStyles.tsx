import React from "react";
import { colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export const DataTableStyles: React.FC = () => {
  const { theme } = useTheme();
  const semantic = colors[theme].semantic;

  return (
    <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Row Styling */
        .datatable-row {
          transition: background-color 0.15s ease;
        }
        .datatable-row:hover {
          background-color: color-mix(in srgb, ${semantic.surface.hover}, transparent 75%);
        }
      `}</style>
  );
};
