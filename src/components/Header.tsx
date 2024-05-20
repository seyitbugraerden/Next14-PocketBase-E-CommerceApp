import Image from "next/image";
import Link from "next/link";
import RightArrow from "@/images/right-arrow.svg";
import logo from "@/images/logo.svg";
import { getHeaderDataFromServer } from "./fetch/fetch";
import Container from "./Container";
async function Header() {
  const data = await getHeaderDataFromServer();
  console.log(data);
  return (
    <div className="fixed z-50 w-full">
      <Container>
        <header className="flex justify-between items-center py-3 text-white">
          <div>
            <Image src={logo} alt="Icon" />
          </div>
          <ul className="flex gap-14">
            {data.map((item, index) => (
              <li key={index} className="hover:opacity-50">
                <Link href={`/${item.title}`}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-row items-center justify-center">
            Log In <Image src={RightArrow} alt="Icon" />
          </div>
        </header>
      </Container>
    </div>
  );
}

export default Header;
