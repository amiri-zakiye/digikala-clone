"use client";
import { signOut } from "@/lib/supabase/user";

const LogoutButton = () => {

    return (
        <div className="px-5">
            <button onClick={() => signOut()} className="flex w-full items-center border-t border-neutral-100 py-3">
                <svg width={24} height={24}><use xlinkHref="#registerationSignOut"></use></svg>
                <span className="text-neutral-700 text-body1-strong mr-1">
                خروج
                </span>
            </button>
        </div>
    )
}
export default LogoutButton;