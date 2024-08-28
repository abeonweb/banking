import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Control, FieldPath } from "react-hook-form"
import { z } from "zod"
import { authFormSchema } from "@/lib/utils"

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    type: string,
    placeholder: string,
    label: string,
    id: string
}

const CustomInput = ({ id, control, name, label, type="text ", placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex flex-col w-full">
                        <FormControl>
                            <Input placeholder={placeholder}
                                id={id}
                                type={type}
                                className="input-class"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput