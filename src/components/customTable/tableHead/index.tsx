type TableHeadProps = {
  colHeaders: string[];
};

function TableHead({ colHeaders }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {colHeaders.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
