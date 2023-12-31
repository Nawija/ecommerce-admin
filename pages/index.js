import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    return (
        <Layout>
            <div className="flex-c flex-col min-h-full -mt-20 text-center anim-opacity">
                <div className="flex items-center justify-center flex-col">
                    <img
                        className="rounded-full"
                        src={`${session?.user?.image}`}
                    />
                    <p className="text-h1">Witaj, {session?.user?.name}</p>
                </div>
                <p className="text-p">
                    dowiedz sie wiecej jak korzystac z naszego autorskiego
                    panelu administracyjnego
                </p>
            </div>
            
        </Layout>
    );
}
