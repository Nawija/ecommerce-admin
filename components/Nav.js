import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { AiFillSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { BsBasket3Fill, BsFillMotherboardFill } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const { data: session } = useSession();
    const inActiveLink =
        "flex-sc font-medium text-sm hover:bg-white/20 transition-colors rounded-lg p-2";
    const activeLink =
        inActiveLink + " text-main bg-gray-100 hover:bg-white/80";
    const router = useRouter();
    const { pathname } = router;
    return (
        <>
            <button
                onClick={handleShowMenu}
                className="fixed lg:hidden right-0 rounded-full bg-gray-800 top-8 z-50 text-white text-2xl p-2"
            >
                <FiMenu />
            </button>
            <aside
                className={`px-2 pt-6 text-white lg:relative fixed top-0 transition-all left-0 h-screen ${
                    showMenu ? "z-50 translate-x-0 bg-gray-800" : "-z-10 lg:z-50 -translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="flex-c mb-10">
                    <img
                        className="w-8 h-8 rounded-full mr-1"
                        src={session.user.image}
                    />
                    <p>{session.user.email}</p>
                    <button
                        className="font-bold text-gray-100 flex-c ml-1 p-1 text-xl rounded-full hover:bg-white hover:text-red-500 transition-colors"
                        onClick={() => signOut()}
                    >
                        <BiExit />
                    </button>
                </div>

                <nav className="flex items-stretch flex-col gap-1">
                    <Link
                        href={"/"}
                        className={pathname === "/" ? activeLink : inActiveLink}
                    >
                        <MdDashboardCustomize className="text-3xl mr-2" />
                        <span>Panel Admin</span>
                    </Link>
                    <Link
                        href={"/produkty"}
                        className={
                            pathname.includes("/produkty")
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <BsBasket3Fill className="text-3xl mr-2" />
                        <span>Produkty</span>
                    </Link>
                    <Link
                        href={"/inne"}
                        className={
                            pathname.includes("/inne")
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <BsFillMotherboardFill className="text-3xl mr-2" />
                        <span>Inne</span>
                    </Link>
                    <Link
                        href={"/ustawienia"}
                        className={
                            pathname.includes("/ustawienia")
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <AiFillSetting className="text-3xl mr-2" />
                        <span>Ustawienia</span>
                    </Link>
                    <Link
                        href={"/ustawienia"}
                        className={
                            pathname.includes("/ustawienia")
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <AiFillSetting className="text-3xl mr-2" />
                        <span>Ustawienia</span>
                    </Link>
                    <Link
                        href={"/ustawienia"}
                        className={
                            pathname.includes("/ustawienia")
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <AiFillSetting className="text-3xl mr-2" />
                        <span>Ustawienia</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
}
