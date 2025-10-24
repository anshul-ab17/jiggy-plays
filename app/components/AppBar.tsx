"use client"
import { Session } from "inspector/promises";
import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
    const session = useSession();
    return(
    <div >
         <div className="flex justify-between"> 
            <div>
              JiggyPlays!
            </div> 
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-red-950" onClick={() => signOut()}>SignOut</button> }
                {!session.data?.user && <button className="m-2 p-2 bg-green-950" onClick={() => signIn()}>SignIn</button> }
                 
            </div>
         
        </div>
    </div>
)}