import React, { useState } from "react";
import axios from "axios";

const Subsr = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/todo/64154000");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>64154000</h1>
      <p>추천결과</p>
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea
          rows={15}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Subsr;
