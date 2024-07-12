import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInput = {
  label: string;
  type: string;
  name: string;
  height?: string;
};

const MKInput = ({ label, type, name, height }: TPHInput) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label htmlFor={label}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            required
            style={{ height: ` ${height ? height : ""}` }}
            {...field}
            type={type}
            id={name}
          />
        )}
      />
    </div>
  );
};

export default MKInput;
