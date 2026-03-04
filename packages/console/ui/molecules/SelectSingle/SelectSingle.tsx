"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import { SelectField } from "../../atoms/SelectField/SelectField";
import { colors, spacing, typography } from "@tokens";
import { FloatingSurface } from "../../atoms/FloatingSurface/FloatingSurface";
import "./SelectSingle.css";

export interface SelectSingleProps {
    label?: string;
    options: { value: string; label: string }[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    id?: string;
}

export const SelectSingle: FC<SelectSingleProps> = ({
    label,
    options,
    value,
    defaultValue,
    onChange,
    error,
    errorMessage,
    helperText,
    disabled,
    required,
    id,
}) => {
    const semantic = colors.semantic;
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // State
    const [isOpen, setIsOpen] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : uncontrolledValue;

    // Close on click outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setHighlightedIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Keyboard navigation
    const handleSelectOption = useCallback((optionValue: string) => {
        if (!isControlled) {
            setUncontrolledValue(optionValue);
        }
        setIsOpen(false);
        setHighlightedIndex(-1);

        if (onChange) {
            onChange(optionValue);
        }
    }, [onChange, isControlled]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                    event.preventDefault();
                    setIsOpen(false);
                    setHighlightedIndex(-1);
                    break;

                case "ArrowDown":
                    event.preventDefault();
                    setHighlightedIndex((prev) =>
                        prev < options.length - 1 ? prev + 1 : prev
                    );
                    break;

                case "ArrowUp":
                    event.preventDefault();
                    setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
                    break;

                case "Enter":
                    event.preventDefault();
                    if (highlightedIndex >= 0 && highlightedIndex < options.length) {
                        handleSelectOption(options[highlightedIndex].value);
                    }
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, highlightedIndex, options, handleSelectOption]);

    // Scroll highlighted option into view
    useEffect(() => {
        if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
            const highlightedElement = dropdownRef.current.children[highlightedIndex] as HTMLElement;
            if (highlightedElement) {
                highlightedElement.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
                });
            }
        }
    }, [highlightedIndex, isOpen]);

    const handleToggle = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
        if (!isOpen) {
            const selectedIndex = options.findIndex((opt) => opt.value === selectedValue);
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
        }
    };

    // Get display label for selected value
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const displayValue = selectedOption ? selectedOption.label : "";

    return (
        <div ref={containerRef} className="select-single-container">
            <SelectField
                id={id}
                label={label}
                value={displayValue}
                placeholder="Selecciona..."
                error={error}
                errorMessage={errorMessage}
                helperText={helperText}
                disabled={disabled}
                required={required}
                open={isOpen}
                onClick={handleToggle}
            />

            {/* Custom Dropdown */}
            {isOpen && !disabled && (
                <FloatingSurface
                    className="select-dropdown"
                    role="listbox"
                    style={{
                        position: "absolute",
                        top: "calc(100% + 4px)", // ✅ Aire elegante (no pegado)
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        padding: 0, // Reset padding on surface, let inner content handle it if needed
                    }}
                >
                    <div
                        ref={dropdownRef}
                        className="floating-scroll"
                        style={{
                            maxHeight: "200px",
                            overflowY: "auto",
                            // Use semantic background if needed for opacity, but FloatingSurface has it.
                            // We need transparent here.
                        }}
                    >
                        {options.map((option, index) => {
                            const isSelected = option.value === selectedValue;
                            const isHighlighted = index === highlightedIndex;

                            return (
                                <div
                                    key={option.value}
                                    className={`select-option ${isSelected ? "is-selected" : ""} ${isHighlighted ? "is-highlighted" : ""}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => handleSelectOption(option.value)}
                                    onMouseEnter={() => setHighlightedIndex(index)}
                                    style={{
                                        padding: `${spacing[12]}px ${spacing[16]}px`,
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        fontFamily: typography.fontFamily.primary,
                                        backgroundColor: isSelected
                                            ? semantic.surface.selected
                                            : isHighlighted
                                                ? semantic.surface.active
                                                : "transparent",
                                        color: isSelected
                                            ? semantic.primary.default
                                            : semantic.text.active,
                                        transition: "background-color 0.15s ease",
                                    }}
                                >
                                    {option.label}
                                </div>
                            );
                        })}
                    </div>
                </FloatingSurface>
            )}
        </div>
    );
};
