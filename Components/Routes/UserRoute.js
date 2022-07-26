import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SyncOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";

const UserRoute = ({ children }) => {
  const { getUserInfo, hidden, setHidden } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (hidden) router.push("/login");
  }, [hidden, router]);

  return (
    <div>
      {!hidden ? (
        <div>{children}</div>
      ) : (
        <div className="m-auto w-[400px] text-[400px] mt-9 text-black">
          <SyncOutlined spin className="flex justify-center" />
        </div>
      )}
    </div>
  );
};

export default UserRoute;
