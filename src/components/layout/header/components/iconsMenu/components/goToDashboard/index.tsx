import { getUser } from "@/utils/supabase/user";
import LoginButton from "../loginButton";
import Link from "next/link";

const GoToDasboard = async () => {
  const { data } = await getUser();
  return (
    <>
      {data?.user ? (
        <Link href="/dashboard" className="flex items-center p-2">
          <UserIcon />
        </Link>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

const UserIcon = () => {
  return (
    <>
      <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
          clipRule="evenodd"
        ></path>
      </svg>
      <svg width={20} height={20} className="fill-icon-high-emphasis">
        <path d="M7 10l5 5 5-5H7z"></path>
      </svg>
    </>
  );
};
export default GoToDasboard;
