import Image from "next/image";
import Link from "next/link";
//import Logo from "@/assets/Logo.png";
// const Logo = 'https://res-console.cloudinary.com/dt3czltxx/thumbnails/v1/image/upload/v1698897801/VGhlIENoZWZzIEN1bGluYXJ5IExvZ28=/grid_landscape';
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart  } from "../lib/db/cart";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"

async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar () {
    const session = await getServerSession(authOptions);
    const cart = await getCart();

    return (
        <div className="bg-base-100 ">
        <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl normal-case ">
                    {/*<Image src={Logo} height={40} width={40} alt="Chefs Academy Logo" /> }
                    <Image src={Logo} height={40} width={40} alt="Chefs Academy Logo" unoptimized />*/}

                    The Chefs Academy 
                </Link>
            </div>
            <div className="flex-none gap-2">
                <form action={searchProducts}>
                    <div className="form-control">
                        <input
                        name="searchQuery"
                        placeholder="Search"
                        className="input input-bordered w-full min-w-[100px]"
                        />
                    </div>
                </form>
                <ShoppingCartButton cart={cart} />
                <UserMenuButton session={session} />
            </div>
        </div>

    </div>
    );
}