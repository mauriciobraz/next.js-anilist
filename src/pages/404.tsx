import type { NextPage } from "next";
import Image from "next/image";

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image src="https://http.cat/404" alt="404" width={512} height={512} />
    </div>
  );
};

export default NotFoundPage;
