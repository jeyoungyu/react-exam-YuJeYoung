import { useState, useEffect } from "react";
import axios from "axios";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getNotices = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );

      setNotices(response.data);
      console.log(response.data);
    };

    getNotices();
  },[]);

  return (
    <div>
      <h2>공지사항</h2>
      <ul className="notice-list">
        {notices.map((notice) => (
          <li key={notice.id}>
            <span className="notice-id">
              {notice.id}.
            </span>
            {notice.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;