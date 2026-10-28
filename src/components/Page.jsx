import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("페이지 로딩...");
  }, []);

  return (
    <div>
      <h3>페이지 로딩</h3>
    </div>
  );
};

export default Page;