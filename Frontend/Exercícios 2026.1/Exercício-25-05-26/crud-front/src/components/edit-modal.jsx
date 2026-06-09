import { useEffect, useState } from "react";
import { FormModal } from "./form-modal";

export function EditModal ({
    title,
    fields,
    onSubmit,
}) {

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm(fields)
    }, [fields])

    async function handleSubmit (e, setOpen) {
        e.preventDefault()
        await onSubmit(form)
        setOpen(false)
    }
    return (
        <FormModal title={title} triggerText="Editar">
            {({ setOpen }) => (
                <form className="space-y-4 mt-4" onSubmit={(e) => handleSubmit(e, setOpen)}>
                    {Object.entries(form).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                            <Label className="capitalize"> {key} </Label>

                            <Input value={value || ''} onChange={(e) => setForm({...form, [key]: e.target.value})} />
                        </div>
                    ))}

                    <Button type="submit" className="w=full">
                        Salvar
                    </Button>
                </form>
            )}
        </FormModal>
    );
}
