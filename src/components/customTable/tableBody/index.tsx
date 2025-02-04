import { TechSpec } from "@/types";

type TableBodyProps = {
  techSpecs: TechSpec[];
};
function TableBody({ techSpecs }: TableBodyProps) {
  return (
    <tbody>
      {techSpecs.map(
        ({ id, label, category, system_value, user_value, note }) => (
          <tr key={id}>
            <th scope="row">{label}</th>
            <td>{category}</td>
            <td>{system_value}</td>
            <td>{user_value}</td>
            <td>{note}</td>
          </tr>
        ),
      )}
    </tbody>
  );
}

export default TableBody;
