export function DataTable ({
  columns,
  data,
  children,
  viewAction,
  editAction,
  deleteAction,
}) {

  const hasActions =
    viewAction ||
    editAction ||
    deleteAction
}

<TableBody>

  {data.map((item) => (
    <TableRow 
      className="p-4" 
      key={item.id}
    >
      {columns.map((column) => (
        <TableCell 
          className="p-4" 
          key={column.key}
        >
          {item[column.key]}
        </TableCell>
      ))}

    </TableRow>
  ))}

  {hasActions && (
    <TableCell className="p-4">

      <div className="flex gap-2">

        {viewAction &&
         viewAction(item)}
        {editAction &&
         editAction(item)}
        {deleteAction &&
         deleteAction(item)}

      </div>
    </TableCell>
  )}

</TableBody>
