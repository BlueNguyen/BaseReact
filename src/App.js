import { Space, TimePicker } from "antd";
import dayjs from "dayjs";

function App() {
  return (
    <Space wrap>
      <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} size="large" />
      <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} />
      <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} size="small" />
    </Space>
  );
}

export default App;
