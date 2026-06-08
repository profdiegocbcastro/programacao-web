import { FormModal } from "@/components/form-modal"

export function ViewModal({ title, items }) {
  return (
    <FormModal title={title} triggerText="Visualizar">
      {() => (
        <div className="space-y-4 mt-4">
          {items.map((item) => (
            <div key={item.label} className="border rounded-xl p-4 bg-muted/40">
              <p className="text-sm text-muted-foreground">{item.label}</p>

              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </FormModal>
  )
}
