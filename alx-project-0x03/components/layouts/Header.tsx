import Link from "next/link";
import Button from "../common/Button";
import { FaUser } from "react-icons/fa"; // example icon for button

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        <div className="flex gap-4 items-center">
          {/* Sign In button */}
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
            action={() => console.log("Sign In clicked")}
          />

          {/* Sign Up button with icon */}
          <Button
            buttonLabel="Sign Up"

