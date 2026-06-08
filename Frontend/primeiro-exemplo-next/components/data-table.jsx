import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DataTable({
  columns,
  data,
  children,
  viewAction,
  editAction,
  deleteAction,
}) {
  const hasActions = viewAction || editAction || deleteAction

  return (
    <div className="rounded-xl border overflow-hidden">
      <Table className="bg-secondary/30">
        <TableHeader className="rounded-xl bg-primary">
          <TableRow>
            {columns.map((column) => (
              <TableHead className="p-4" key={column.key}>
                {column.header}
              </TableHead>
            ))}

            {hasActions && <TableHead className="p-4">Ações</TableHead>}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow className="p-4" key={item.id}>
              {columns.map((column) => (
                <TableCell className="p-4" key={column.key}>
                  {item[column.key]}
                </TableCell>
              ))}

              {hasActions && (
                <TableCell className="p-4">
                  <div className="flex gap-2">
                    {viewAction && viewAction(item)}

                    {editAction && editAction(item)}

                    {deleteAction && deleteAction(item)}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {children && <div className="p-4">{children}</div>}
    </div>
  )
}
