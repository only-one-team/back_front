import React, {useState} from 'react';
import axios from 'axios';

const Asubsr = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'http://127.0.0.1:8000/todo/64659000',
      );
      setData(response.data);
    } catch (e) {
      console.log(e)
    }
  };

  return(
    <div>
      <h1>64659000</h1>
      <p>추천 결과</p>
      <button onClick={onClick}>불러오기</button>
      {data && <textarea rows={15} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
};

export default Asubsr;