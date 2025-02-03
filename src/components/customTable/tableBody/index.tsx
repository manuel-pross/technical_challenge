import { TechSpec } from "@/types";

type TableBodyProps = {
  techSpecs: TechSpec[];
};
function TableBody({ techSpecs }: TableBodyProps) {
  return (
    <tbody>
      {techSpecs.map((techSpec) => {
        return (
          <tr key={techSpec.id}>
            <th>{techSpec.label}</th>
            <td>{techSpec.category}</td>
            <td>{techSpec.system_value}</td>
            <td>{techSpec.user_value}</td>
            <td>{techSpec.note}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
