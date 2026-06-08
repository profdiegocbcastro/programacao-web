import { FormModal } from "@/components/form-modal"
import { Button } from "@/components/ui/button"

export function DeleteModal({ title, onDelete }) {
  return (
    <FormModal title={title} triggerText="Deletar">
      {({ setOpen }) => (
        <div className="space-y-4 mt-4">
          <Button
            variant="destructive"
            className="w-full"
            onClick={async () => {
              await onDelete()
              setOpen(false)
            }}
          >
            Confirmar Exclusão
          </Button>
        </div>
      )}
    </FormModal>
  )
}
