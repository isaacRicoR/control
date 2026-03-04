import { FC } from "react";
import { Input, InputProps } from "../Input/Input";

export type SearchInputProps = Omit<InputProps, "size">;

export const SearchInput: FC<SearchInputProps> = ({
    placeholder = "Buscar...",
    ...props
}) => {
    return (
        <Input
            size="sm"
            placeholder={placeholder}
            {...props}
        />
    );
};
