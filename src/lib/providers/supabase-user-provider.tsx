"use client";

import { AuthUser } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@/components/ui/use-toast";

type SupabaseUserContextType = {
  user: AuthUser | null;
};

const SupabaseUserContext = createContext<SupabaseUserContextType>({
  user: null,
});

export const useSupabaseUser = () => {
  return useContext(SupabaseUserContext);
};

interface SupabaseUserProviderProps {
  children: React.ReactNode;
}

export const SupabaseUserProvider: React.FC<SupabaseUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const { toast } = useToast();

  const supabase = createClientComponentClient();
  // fetch user details
  // fetch subscription details
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        console.log(user);
        setUser(user);
      }
    };

    getUser();
  }, [supabase, toast]);

  return (
    <SupabaseUserContext.Provider value={{ user }}>
      {children}
    </SupabaseUserContext.Provider>
  );
};

// "use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import React, { createContext, useState, useEffect, useContext } from "react";
// import { Session, User } from "@supabase/supabase-js";

// interface AuthContextProps {
//   user?: User;
//   setUser: (user: User | undefined) => void;
//   session: Session | null;
//   setSession: (session: Session | null) => void;
// }

// const AuthContext = createContext<AuthContextProps>({
//   user: undefined,
//   setUser: () => {},
//   session: null,
//   setSession: () => {},
// });

// export const useSupabaseUser = () => {
//   return useContext(AuthContext);
// };

// interface SupabaseUserProviderProps {
//   children: React.ReactNode;
// }

// export const AuthProvider: React.FC<SupabaseUserProviderProps> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | undefined>(undefined);
//   const [session, setSession] = useState<Session | null>(null);
//   const supabase = createClientComponentClient();

//   useEffect(() => {
//     const handleSessionChange = async () => {
//       const session = await supabase.auth.getSession(); // Use await to wait for resolution
//       setUser(session.data.session?.user);
//       setSession(session.data.session);
//     };

//     handleSessionChange();

//     const subscription = supabase.auth.onAuthStateChange(handleSessionChange);

//     return () => subscription.data.subscription.unsubscribe();
//   }, [supabase.auth]);

//   return (
//     <AuthContext.Provider value={{ user, setUser, session, setSession }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
