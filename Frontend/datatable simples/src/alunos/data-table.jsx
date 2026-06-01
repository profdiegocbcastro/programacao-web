import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
 Button,
} from "@/components/ui/button"

export function DataTable({
  columns,
  data,
}) {

  return (
    <div className="rounded-xl border overflow-hidden">
      <Table className="bg-secondary/30">
        <TableHeader className="rounded-xl bg-primary">
          <TableRow>
            {columns.map((column) => (
              <TableHead className="p-4" key={column.accessorKey}>
                {column.header}
              </TableHead>
            ))}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="m-4">
        Adicionar Aluno
      </Button>
    </div>
  )
}