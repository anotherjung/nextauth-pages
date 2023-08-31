import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req){
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                //find user from db
                if (email ==  "u@u.com" && password == "1" )
                return {id: "1", name:'user', role: 'user'};
                //return user
                if (email ==  "a@a.com" && password == "1" )
                return {id: "2", name:'admin', role: 'admin'} 
                else
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log(11,"api",token,user)
            if (user) { token.role = user.role }
            console.log(12,"api",token,user)
          return token
        },
        async session({ session, token, user }) {
            if (token && session.user) {
                session.user.role = token.role
            }
          return session
        }
      },
}

export default NextAuth(authOptions)
 
 