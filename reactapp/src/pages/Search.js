import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const subsrValue = document.getElementsByName("subsr")[0].value; // subsr 입력 필드의 값 가져오기

      // subsr 값에 기반하여 동적으로 URL 구성
      const url = `http://127.0.0.1:8000/todo/${subsrValue}`;

      const response = await axios.get(url); // 데이터를 가져오기 위해 axios.get 사용
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>출연진 기반 vod 추천</h3>
      <p>64154000 또는 64659000를 입력하며 추천을 클릭하면 각각의 결과가 나옵니다</p>
      <form>
        이름 :{" "}
        <input type="text" placeholder="이름을 입력하세요" name="subsr" />
        <br />
        <br />
        <button type="button" onClick={onClick}>
          추천
        </button>
      </form>
      {/* <button type="button" onClick={onClick}>탐색 테스트</button> */}
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

export default Search;
